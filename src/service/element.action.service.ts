import { ElementArray } from 'webdriverio';
import { Location } from 'webdriverio/build/commands/element/getLocation';
import Remote from '../componet/driver.remote.js';
import logger from '../config/log.config.js';

export class ElementAction {
    private elements: ElementArray;
    constructor(elements: ElementArray) {
        this.elements = elements;
    }

    public async click(elementIndex: number): Promise<void> {
        try {
            // const beforeWindowSize = await Driver.getWindowSize();
            if (this.elements.length > 0) {
                if (elementIndex) {
                    await this.elements[elementIndex].click();
                } else {
                    await this.elements[0].click();
                }
                // const afterWindowSize = await Driver.getWindowSize();
                // if (afterWindowSize !== 0 && beforeWindowSize !== 0 && afterWindowSize !== beforeWindowSize) {
                //     await Driver.switchToWindow(afterWindowSize);
                // }
                return;
            }
        } catch (error) {
            throw new Error(`Element Error Click : ${error}`);
        }
    }

    public async getText(elementIndex: number): Promise<string[]> {
        try {
            const texts: Array<string> = [];
            if (this.elements.length > 0) {
                if (elementIndex) {
                    const text = await this.elements[elementIndex].getText();
                    texts.push(text);
                } else {
                    for (let i = 0; i < this.elements.length; i) {
                        const element = this.elements[i];
                        // eslint-disable-next-line no-await-in-loop
                        const text = await element.getText();
                        texts.push(text);
                        i += 1;
                    }
                }
                return texts;
            }
            return texts;
        } catch (error) {
            throw new Error(`Element Error GetText : ${error}`);
        }
    }

    public async setValue(elementIndex: number, setValue: string): Promise<void> {
        try {
            if (this.elements.length > 0 && setValue) {
                if (elementIndex) {
                    this.elements[elementIndex].setValue(setValue);
                } else {
                    this.elements[0].setValue(setValue);
                }
            }
        } catch (error) {
            throw new Error(`Element Error SetValue : ${error}`);
        }
    }

    public async getLocation(index: number): Promise<Location | undefined> {
        try {
            if (this.elements.length > 0) {
                return await this.elements[index].getLocation();
            }
            return undefined;
        } catch (error) {
            throw new Error(`Element Error getLocation : ${error}`);
        }
    }

    public async getCssProperty(elementIndex: number, getCssProperty: string): Promise<any> {
        try {
            if (this.elements.length > 0) {
                if (elementIndex) {
                    return await this.elements[elementIndex].getCSSProperty(getCssProperty);
                }
                return await this.elements[0].getCSSProperty(getCssProperty);
            }
            return undefined;
        } catch (error) {
            throw new Error(`Element Error getCss : ${error}`);
        }
    }

    public async getAttribute(elementIndex: number, attribute: string): Promise<any> {
        try {
            if (this.elements.length > 0) {
                if (elementIndex) {
                    return await this.elements[elementIndex].getAttribute(attribute);
                }
                return await this.elements[0].getAttribute(attribute);
            }
            return undefined;
        } catch (error) {
            throw new Error(`Element Error getAttribute : ${error}`);
        }
    }

    public async ScrollIntoView(
        elementIndex: number,
        behavior: string | undefined,
        block: string | undefined,
        inline: string | undefined
    ): Promise<any> {
        try {
            const scrollIntoView: any = {};
            scrollIntoView.behavior = behavior;
            scrollIntoView.block = block;
            scrollIntoView.inline = inline;
            if (this.elements.length > 0) {
                if (elementIndex) {
                    return await this.elements[elementIndex].scrollIntoView(scrollIntoView);
                }
            }
            return await this.elements[0].scrollIntoView(scrollIntoView);
        } catch (error) {
            throw new Error(`Element Error ScrollIntoView : ${error}`);
        }
    }
}

export default ElementAction;
