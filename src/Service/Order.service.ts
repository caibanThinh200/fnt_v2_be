import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import OrderFactory from "../Factory/Creator/OrderFactory";
import jwt from "jsonwebtoken";
import _ from "lodash";
import { ProductFactory } from "../Factory/Creator/ProductFactory";
import BillFactory from "../Factory/Creator/BillFactory";

class OrderService {
    public static async AddOrderService(req: any) {
        const type = req.headers["type"];
        const { products } = req.body;

        try {
            const orderFactory = OrderFactory.createOrder(req.body, type);

            const orderSchema = OrderFactory.createSchema(orderFactory, type);

            const result = await orderSchema
                .save()
                .then(() => {
                    const updateQuantity = async () => {
                        for (let i = 0; i < products.length; i++) {
                            const product = await ProductFactory.getSchema(
                                type
                            ).findById(products[i].product._id);
                            _.extend(product, {
                                quantity:
                                    product.quantity - products[i].quantity,
                                saled_count: product.saled_count + products[i].quantity
                            });
                            await product.save();
                        }
                    };

                    updateQuantity();

                    return CommonFunction.getActionResult(
                        null,
                        201,
                        null,
                        TAG_DEFINE.RESULT.ORDER.create
                    );
                })
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        400,
                        err,
                        TAG_DEFINE.RESULT.ORDER.create
                    );
                });

            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.create
            );
        }
    }

    public static async GetListOrderService(req: any) {
        const type = req.headers["type"];
        const status = req.query.status;

        try {
            let orders;

            if (status === '' && !status){
                orders = await OrderFactory.getSchema(type)
                    .find()
                    .sort({ created_at: -1 })
                    .populate("userId");
            }else{
                orders = await OrderFactory.getSchema(type)
                    .find()
                    .where("delivery.status")
                    .equals(req.query.status)
                    .sort({ created_at: -1 })
                    .populate("userId");
            }

            const ordersFactory = orders.map((order) =>
                OrderFactory.getOrder(order, type)
            );

            return CommonFunction.getActionResult(ordersFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.getList
            );
        }
    }

    public static async CancelOrderService(req: any) {
        const type = req.headers["type"];
        const { orderId } = req.params;

        try {
            const order = await OrderFactory.getSchema(type).findById(orderId);
            const bill = await BillFactory.getSchema(type).findOne({orderId});

            if (!order){
              return CommonFunction.getActionResult(null, 400, {message: 'Can not find any order'}, TAG_DEFINE.RESULT.ORDER.cancel);
            }

            order.haveInBill = false;
            order.delivery.status = 'canceled'
            await order.save();

            if (bill){
              await BillFactory.getSchema(type).findByIdAndDelete(bill._id);
            }

            return CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.ORDER.cancel);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.cancel
            );
        }
    }
    public static async CompleteOrderService(req: any) {
        const type = req.headers["type"];
        const { orderId } = req.params;

        try {
            const order = await OrderFactory.getSchema(type).findById(orderId);

            if (!order){
              return CommonFunction.getActionResult(null, 400, {message: 'Can not find any order'}, TAG_DEFINE.RESULT.ORDER.cancel);
            }

            order.delivery.status = 'success'
            order.payment.status = true
            await order.save();

            return CommonFunction.getActionResult(null, 200, null, TAG_DEFINE.RESULT.ORDER.complete);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.complete
            );
        }
    }

    public static async GetMyOrdersService(req: any) {
        const type = req.headers["type"];
        const token = req.headers["authorization"];

        try {
            const decode = jwt.verify(
                token.split(" ")[1],
                process.env.SECRET_JWT
            );

            const orders = await OrderFactory.getSchema(type).find({
                userId: decode._id,
            });

            const ordersFactory = orders.map((order) =>
                OrderFactory.getOrder(order, type)
            );

            return CommonFunction.getActionResult(ordersFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.getList
            );
        }
    }

    public static async GetDetailOrderService(req: any) {
        const type = req.headers["type"];

        try {
            const order = await OrderFactory.getSchema(type).findById(
                req.params.orderId
            );

            const orderFactory = OrderFactory.getOrder(order, type);

            return CommonFunction.getActionResult(orderFactory, 200, null);
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.getDetail
            );
        }
    }

    public static async UpdateOrder(req: any) {
        const type = req.headers["type"];

        try {
            const order = await OrderFactory.getSchema(type).findById(
                req.params.orderId
            );
            _.extend(order, req.body);
            const result = await order
                .save()
                .then(() =>
                    CommonFunction.getActionResult(
                        null,
                        200,
                        null,
                        TAG_DEFINE.RESULT.ORDER.update
                    )
                )
                .catch((err) => {
                    logger.error(err);
                    return CommonFunction.getActionResult(
                        null,
                        400,
                        err,
                        TAG_DEFINE.RESULT.ORDER.update
                    );
                });

            return result;
        } catch (e) {
            logger.error(e);
            return CommonFunction.getActionResult(
                null,
                400,
                e,
                TAG_DEFINE.RESULT.ORDER.update
            );
        }
    }
}

export default OrderService;
