import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import xPathService from '../resource/xpath.service.js';
import Element from '../service/element.service.js';

async function AppMainFooterHomeButton(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appMain', 'mainHomeButton').getXPath(),
            retryNo: 20,
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
        throw new Error(`[ERROR] AppMainFooterHomeButton Error : ${e}`);
    }
}

async function AppMainAllCategoryButtons(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appMain', 'mainAllCategoryButton').getXPath(),
            retryNo: 20,
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
        throw new Error(`[ERROR] AppMainAllCategoryButtons Error : ${e}`);
    }
}
async function AppMainDetailAllCategoryButtons(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appMain', 'mainDetailAllCategoryButton').getXPath(),
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
        throw new Error(`[ERROR] AppMainDetailAllCategoryButtons Error : ${e}`);
    }
}

export { AppMainFooterHomeButton, AppMainAllCategoryButtons, AppMainDetailAllCategoryButtons };
