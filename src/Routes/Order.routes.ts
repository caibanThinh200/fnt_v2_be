import { Router } from "express";
import PATH from "../Constant/url";
import OrderController from "../Controller/Order.controller";

const router = Router();

router.get(PATH.APP.start, OrderController.GetListOrderController);
router.get(PATH.ORDER.myOrder, OrderController.GetMyOrderController);
router.get(PATH.ORDER.param, OrderController.GetDetailOrderController);
router.post(PATH.APP.start, OrderController.AddOrderController);
router.put(PATH.ORDER.param, OrderController.UpdateOrderController);
router.put(PATH.ORDER.cancel, OrderController.CancelOrderController);
router.put(PATH.ORDER.complete, OrderController.CompleteOrderController);

export default router;