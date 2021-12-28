import logger from "../Config/logger";
import TAG_DEFINE from "../Constant/define";
import CommonFunction from "../Utils/function";
import { Request, Response } from "express";
import OrderService from "../Service/Order.service";

class OrderController {
  public static async AddOrderController(req: Request, res: Response) {
    try {
      const result = await OrderService.AddOrderService(req);
      res.status(201).json(result);
    } catch (e) {
      logger.error(e);
      res
        .status(500)
        .json(
          CommonFunction.getActionResult(
            null,
            500,
            e,
            TAG_DEFINE.RESULT.CATEGORY.create
          )
        );
    }
  }

  public static async GetListOrderController(req: Request, res: Response) {
    try {
      const result = await OrderService.GetListOrderService(req);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      res
        .status(500)
        .json(
          CommonFunction.getActionResult(
            null,
            500,
            e,
            TAG_DEFINE.RESULT.CATEGORY.getList
          )
        );
    }
  }

  public static async GetMyOrderController(req: Request, res: Response) {
    try {
      const result = await OrderService.GetMyOrdersService(req);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      res
        .status(500)
        .json(
          CommonFunction.getActionResult(
            null,
            500,
            e,
            TAG_DEFINE.RESULT.CATEGORY.getList
          )
        );
    }
  }

  public static async GetDetailOrderController(req: Request, res: Response) {
    try {
      const result = await OrderService.GetDetailOrderService(req);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      res
        .status(500)
        .json(
          CommonFunction.getActionResult(
            null,
            500,
            e,
            TAG_DEFINE.RESULT.CATEGORY.getDetail
          )
        );
    }
  }

  public static async UpdateOrderController(req: Request, res: Response) {
    try {
      const result = await OrderService.UpdateOrder(req);
      res.status(200).json(result);
    } catch (e) {
      logger.error(e);
      res
        .status(500)
        .json(
          CommonFunction.getActionResult(
            null,
            500,
            e,
            TAG_DEFINE.RESULT.CATEGORY.update
          )
        );
    }
  }
}

export default OrderController;
