import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import xPathService from '../resource/xpath.service.js';
import Element from '../service/element.service.js';
import ElementAction from '../service/element.action.service.js';

async function mainCheckTestCase(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('webMain', 'main').getXPath(),
            retryNo: 10,
        };
        console.log(`run case : ${JSON.stringify(elemetInfo)}`);

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
        logger.info(`[WEB][메인] 앱 실행 메인 확인-실패`);
        throw new Error(`[ERROR] mainCheckTestCase Error`);
    }
}

async function mainThumnailScroll() {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('webMain', 'mainThumnailText').getXPath(),
            xpathOption: '분식',
            retryNo: 5,
        };
        console.log(`run case  scroll : ${JSON.stringify(elemetInfo)}`);
        const element = new Element(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        const elements = await element.runFind();
        const elementAction = new ElementAction(elements);
        await elementAction.ScrollIntoView(0, 'auto', 'start', 'start');
        await elementAction.click(0);
    } catch (e) {
        logger.info(`[WEB][메인] 썸네일 이동-실패`);
        throw new Error(`[ERROR] mainThumnailScroll Error`);
    }
}

async function mainSearch() {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('webMain', 'mainSearch').getXPath(),
            retryNo: 5,
        };
        const element = new Element(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        const elements = await element.runFind();
        await new ElementAction(elements).click(0);
    } catch (e) {
        logger.info(`[WEB][메인] 메인 검색-실패`);
        throw new Error(`[ERROR] mainSearch Error`);
    }
}

async function mainSearchTestCase() {
    try {
        await mainCheckTestCase();
        await mainSearch();
    } catch (e) {
        throw new Error(`[ERROR] mainSearchTestCase Error`);
    }
}

export default mainSearchTestCase;
