'use strict';

import express from 'express'
import Setting from '../controller/setting/setting'
const router = express.Router();

router.post('/wfcSetting', Setting.wfcSetting);
router.post('/weiXinSetting', Setting.weiXinSetting);
router.all('/getSetting', Setting.getSetting);

export default router
