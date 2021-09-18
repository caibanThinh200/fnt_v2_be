import express from 'express';
import controller from '../Controller/Bill.controller';
import PATH from '../Constant/url'
const router = express.Router();

router.get(PATH.APP.start, controller.GetListBill);
router.get(PATH.APP.params.replace("params", "id"), controller.GetDetailBill)
router.post(PATH.APP.start, controller.CreateBill);
router.put(PATH.APP.params.replace("params", "id"), controller.UpdateBill);
router.delete(PATH.APP.params.replace("params", "id"), controller.DeleteBill);

export default router;