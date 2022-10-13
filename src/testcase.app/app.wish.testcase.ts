import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import xPathService from '../resource/xpath.service.js';
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

async function wishMoveTestCase() {
    try {
        const mainFooterButtons = await AppMainFooterButtons();
        // eslint-disable-next-line no-restricted-syntax
        for (const mainFooterButton of mainFooterButtons) {
            // eslint-disable-next-line no-await-in-loop
            const mainFooterText = await mainFooterButton.getText();
            if (mainFooterText === '찜') {
                // eslint-disable-next-line no-await-in-loop
                await mainFooterButton.click();
            }
        }
    } catch (e) {
        logger.info(`[APP][메인] 메인 푸터 영역에서 찜 버튼 클릭-실패`);
        throw new Error(`[ERROR] wishMoveTestCase Error`);
    }
}

export default AppMainFooterButtons;
