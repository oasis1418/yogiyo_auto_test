import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import xPathService from '../resource/xpath.service.js';
import Driver from '../service/driver.service.js';
import Element from '../service/element.service.js';
import ElementAction from '../service/element.action.service.js';

async function AppMainFooterButtons(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appMain', 'mainfooterButtons').getXPath(),
            retryNo: 10,
        };
        const element = new Element(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        logger.info(`[APP][메인] 앱 실행 후 메인 이동 확인-실패`);
        throw new Error(`[ERROR] AppMainFooterButtons Error`);
    }
}

export default AppMainFooterButtons;
