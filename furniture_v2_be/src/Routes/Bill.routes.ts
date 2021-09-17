import express from 'express';
import controller from '../Controller/Bill.controller';
import PATH from '../Constant/url'
const router = express.Router();

router.get(PATH.APP.start, controller.GetListBill);
router.post(PATH.APP.start, controller.CreateBill);

export default router;