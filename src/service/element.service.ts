import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import Remote from '../componet/driver.remote.js';

class ElementService {
    private patternValue: string;
    private patternOption: string;
    private patternIndex: number;
    private xpathValue: string;
    private xpathOption: string;
    private retryNo: number;

    constructor(
        patternValue: string,
        patternOption: string,
        patternIndex: number,
        xpathValue: string,
        xpathOption: string,
        retryNo: number
    ) {
        this.patternValue = patternValue;
        this.patternOption = patternOption;
        this.patternIndex = patternIndex;
        this.xpathValue = xpathValue;
        this.xpathOption = xpathOption;
        this.retryNo = retryNo;
    }

    private option(xpath: string, option?: string): string {
        try {
            if (option) {
                const replaceXpath = xpath.replace('@Option', option);
                return replaceXpath;
            }
            return xpath;
        } catch (error) {
            throw new Error(`Element Error Option Convert : ${this.xpathValue}`);
        }
    }

    private async getElementsByXpath(patternEl?: WebdriverIO.Element): Promise<ElementArray> {
        try {
            const replaceXpath = this.option(this.xpathValue, this.xpathOption);
            if (patternEl) {
                const elements = await patternEl.$$(replaceXpath);
                return elements;
            }
            const elements = await Remote.driver.$$(replaceXpath);
            return elements;
        } catch (error) {
            throw new Error(`Element Error Find Xpath : ${error}`);
        }
    }

    private async getElementsByPattern(): Promise<ElementArray> {
        try {
            if (this.patternValue) {
                const replacePattern = this.option(this.patternValue, this.patternOption);
                const patterns = await Remote.driver.$$(replacePattern);
                if (this.patternIndex !== undefined) {
                    const pattern = patterns[this.patternIndex];
                    return this.getElementsByXpath(pattern);
                }
            }
            // 패턴 없으면
            return this.getElementsByXpath();
        } catch (error) {
            throw new Error(`Element Error Find Pattern : ${error}`);
        }
    }

    private async getElementsByRetry(): Promise<ElementArray> {
        try {
            // const keybordStatus = await Remote.driver.isKeyboardShown();
            // logger.debug(`keybordStatus : ${keybordStatus}`);
            // if (keybordStatus === true) {
            //     await Remote.driver.hideKeyboard();
            //     await Remote.driver.pause(2000);
            //     logger.debug(`keybord hide`);
            // }

            if (this.retryNo) {
                // 리트라이 있으면
                await Remote.driver.waitUntil(
                    async () => {
                        logger.debug(`element Retry...`);
                        const elements = await this.getElementsByPattern();
                        return elements.length > 0;
                    },
                    {
                        timeout: this.retryNo * 1000,
                        timeoutMsg: `${this.xpathValue} find Element timeout : ${this.retryNo * 1000}ms`,
                    }
                );
            }
            return await this.getElementsByPattern();
        } catch (error) {
            throw new Error(`Element Error Find Retry : ${error}`);
        }
    }

    public async runFind(): Promise<ElementArray> {
        try {
            return this.getElementsByRetry();
        } catch (error) {
            throw new Error(`Run Find Error : ${error}`);
        }
    }
}

export default ElementService;
