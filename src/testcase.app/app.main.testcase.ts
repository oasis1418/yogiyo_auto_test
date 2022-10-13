import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import * as MainElement from '../element.app/main.element.js';
import xPathService from '../resource/xpath.service.js';
import Element from '../service/element.service.js';
import ElementAction from '../service/element.action.service.js';

async function mainMoveTestCase() {
    try {
        const footerHomeButtonsEl = await MainElement.AppMainAllCategoryButtons();
        if (footerHomeButtonsEl.length > 0) {
            logger.info(`[APP][메인] 앱 실행 후 메인 이동 (성공)`);
        }
    } catch (e) {
        throw new Error(`[ERROR] mainMoveTestCase Error : ${e}`);
    }
}
async function allCategoryhMoveTestCase() {
    try {
        const allCategoryButtonsEl = await MainElement.AppMainAllCategoryButtons();
        await allCategoryButtonsEl[0].click();
        const allDetailCategoryButtonsEl = await MainElement.AppMainDetailAllCategoryButtons();
        await allDetailCategoryButtonsEl[0].click();
        logger.info(`[APP][메인] 메인에서 카테고리 이동 버튼 클릭 (성공)`);
    } catch (e) {
        throw new Error(`[ERROR] allCategoryhMoveTestCase Error : ${e}`);
    }
}

export { mainMoveTestCase, allCategoryhMoveTestCase };
