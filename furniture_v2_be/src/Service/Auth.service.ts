import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { UserFactory } from "../Factory/Creator/UserFactory";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

export default class AuthService {
    public static async RegisterService(req: any) {
        const type = req.headers["type"];
        try {
            const userFactory = UserFactory.createUser(req.body, type);
            const user = UserFactory.createSchema(userFactory, type);
            const result = await user
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.REGISTER.success,
                        200
                    )
                )
                .catch((e) => {
                    logger.error(e);
                    return CommonFunction.getActionResult(
                        TAG_DEFINE.RESULT.AUTH.REGISTER.failed,
                        500
                    );
                });

            return result;
        } catch (error) {
            logger.error(error);
        }
    }

    public static async LoginService(req: any) {
        const type = req.headers["type"];
        const { username, password } = req.body;
        try {
            const existingUser: any = await UserFactory.getSchema(type).findOne({username});
            if (!existingUser){
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.AUTH.LOGIN.failed,
                    401
                );
            }

            const comparePassword = await bcrypt.compare(password, existingUser.password);

            if (!comparePassword){
                return CommonFunction.getActionResult(
                    TAG_DEFINE.RESULT.AUTH.LOGIN.failed,
                    401
                );
            }

            //JWT
            const token = jwt.sign(
                {
                    ...existingUser._doc,
                    password: undefined,
                }, 
                process.env.SECRET_JWT, 
                {expiresIn: '1 day'}
            )

            const result = CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.AUTH.LOGIN.success,
                200
            );

            return {
                result,
                accessToken: token,
            }
            
        } catch (error) {
            logger.error(error);
        }
    }

    public static async GetDetailUserService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const user = await UserFactory.getSchema(type).find({
                type,
                _id: id
            });
            const userFactory = user.map(item => UserFactory.getUser(item, type));
            return userFactory;
        } catch(e) {
            logger.error(e);
        }
    }

    public static async UpdateUserService(req: any) {
        try {
            const {type} = req.query || "";
            const {id} = req.params || "";
            const currentUser = await this.GetDetailUserService(req);
            const filters = currentUser[0] || {};
            const newRequest = {
                ...currentUser[0], 
                ...req.body
            };
            const updateUser = UserFactory.createUser(newRequest, req.query);
            const updateResult = await UserFactory.getSchema(type)
            .find(filters)
            .updateOne(updateUser)
            .then(() => CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.update, 200))
            .catch((err) => {
                logger.error(err);
                return CommonFunction.getActionResult(TAG_DEFINE.RESULT.AUTH.update, 500);
            })
            return updateResult;
        } catch(e) {
            logger.error(e);
        }
    }
}
