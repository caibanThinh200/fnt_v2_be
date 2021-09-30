import express from 'express';
import TAG_DEFINE from '../Constant/define';
import PATH from '../Constant/url';
import controller from '../Controller/CategoryDetail.controller';

const router = express.Router();

router.get(PATH.APP.start, controller.GetListCategoryDetailController);
router.get(PATH.APP.params.replace("params", "id"), controller.GetDetailCategoryDetailController);
router.post(PATH.APP.start, controller.AddCategoryDetailController);
router.put(PATH.APP.params.replace("params", "id"), controller.UpdateCategoryDetailController);
router.delete(PATH.APP.params.replace("params", "id"), controller.DeleteCategoryDetailController);

export default router;