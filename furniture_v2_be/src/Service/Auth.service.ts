import logger from "../config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { UserFactory } from "../Factory/Creator/UserFactory";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class AuthService {
    public static async RegisterService(req: any) {
        const type = req.headers["type"];
        try {
            const userFactory = UserFactory.createUser(req.body, type);

            //hash Password
            await CommonFunction.hashPassword(userFactory);

            //Validate Gender 
            CommonFunction.validateGender(userFactory);
            
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
            const existingUser: any = await UserFactory.getSchema(type).findOne(
                { username }
            );
            if (!existingUser) {
                return TAG_DEFINE.RESULT.AUTH.LOGIN.exist;
            }

            const comparePassword = await bcrypt.compare(
                password,
                existingUser.password
            );

            if (!comparePassword) {
                return TAG_DEFINE.RESULT.AUTH.LOGIN.wrong_pass;
            }

            // JWT
            const token = jwt.sign(
                {
                    ...existingUser._doc,
                    password: undefined,
                },
                process.env.SECRET_JWT,
                { expiresIn: "1 day" }
            );

            const result = CommonFunction.getActionResult(
                TAG_DEFINE.RESULT.AUTH.LOGIN.success,
                200
            );

            return {
                result,
                accessToken: token,
            };
        } catch (error) {
            logger.error(error);
        }
    }
}
