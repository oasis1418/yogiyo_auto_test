import Remote from '../componet/driver.remote.js';
import logger from '../../src/config/log.config.js';

interface WinHandle {
    winHandleId: string;
    index: number;
    url: string;
}
class Driver {
    public static async webRemote() {
        try {
            await Remote.webCapability();
        } catch (e) {
            throw new Error(`Error Driver Remote : ${e}`);
        }
    }

    public static async navigate(url: string) {
        try {
            await Remote.driver.navigateTo(url);
        } catch (e) {
            throw new Error(`Error Driver Start Activity : ${e}`);
        }
    }

    public static async appRemote() {
        try {
            await Remote.appCapability();
        } catch (e) {
            throw new Error(`Error Driver Remote : ${e}`);
        }
    }

    public static async startActivity(appName: string, appIntro: string) {
        try {
            await Remote.driver.startActivity(appName, appIntro);
        } catch (e) {
            throw new Error(`Error Driver Start Activity : ${e}`);
        }
    }

    public static async activateApp(appName: string) {
        try {
            await Remote.driver.activateApp(appName);
        } catch (e) {
            throw new Error(`Error Driver Activate App : ${e}`);
        }
    }

    public static async isKeyboardShown() {
        try {
            const isKeyboardShown = await Remote.driver.isKeyboardShown();
            return isKeyboardShown;
        } catch (e) {
            throw new Error(`Error Driver Is Keybouard Shown : ${e}`);
        }
    }

    public static async getContexts(): Promise<string[]> {
        try {
            const contexts: any = await Remote.driver.getContexts();
            return contexts;
        } catch (e) {
            throw new Error(`Error Get Contexts : ${e}`);
        }
    }

    public static async getContext(): Promise<string | null> {
        try {
            const context: any = await Remote.driver.getContext();
            return context;
        } catch (e) {
            throw new Error(`Error Get Context : ${e}`);
        }
    }

    public static async switchContext(context: string) {
        try {
            await Remote.driver.waitUntil(
                async () => {
                    const conTexts = await Remote.driver.getContexts();
                    return conTexts.includes(context);
                },
                {
                    timeout: 10000,
                    timeoutMsg: `[ERROR][Context] ${context} : Loding timeout : 10000ms `,
                }
            );
            await Remote.driver.switchContext(context);
        } catch (e) {
            throw new Error(`Error Switch Context: ${e}`);
        }
    }

    public static async getWinHandles(): Promise<WinHandle[]> {
        try {
            const winHandles: WinHandle[] = [];
            const winHandleIds = await Remote.driver.getWindowHandles();
            for (let index = 0; index < winHandleIds.length; index += 1) {
                const winHandleId = winHandleIds[index];
                // eslint-disable-next-line no-await-in-loop
                await Remote.driver.switchToWindow(winHandleId);
                // eslint-disable-next-line no-await-in-loop
                const url = await Remote.driver.getUrl();
                const winHandle = { winHandleId, index, url };
                winHandles.push(winHandle);
            }
            return winHandles;
        } catch (e) {
            throw new Error(`Error Get WinHandles: ${e}`);
        }
    }

    public static async switchToWinHandleId(winHandleId: string) {
        try {
            await Remote.driver.waitUntil(
                async () => {
                    const windowHandles = await Remote.driver.getWindowHandles();
                    return windowHandles.includes(winHandleId);
                },
                {
                    timeout: 10000,
                    timeoutMsg: `[ERROR][WindowHandle] ${winHandleId} : Loding timeout : 10000ms `,
                }
            );
            await Remote.driver.switchToWindow(winHandleId);
        } catch (e) {
            throw new Error(`Error Switch WinHandle Id: ${e}`);
        }
    }

    // switch hoandels (params: base url, compare url)
    public static async switchToWinHandleUrl(baseUrl: string, compareUrl: string) {
        try {
            let winHandleId = '';
            if (compareUrl === null) {
                await Remote.driver.waitUntil(
                    async () => {
                        const winHandles = await this.getWinHandles();
                        const filterUrlWinHandles = winHandles.filter((winHandle) => winHandle.url.includes(baseUrl));
                        const winHandleIds = filterUrlWinHandles.map((winHandle) => winHandle.winHandleId);
                        winHandleId = winHandleIds[winHandleIds.length - 1];
                        return winHandleIds.length > 0;
                    },
                    {
                        timeout: 10000,
                        timeoutMsg: `[ERROR][WindowHandle] ${winHandleId} : Loding timeout : 10000ms `,
                    }
                );
            } else {
                await Remote.driver.waitUntil(
                    async () => {
                        let cutWinHandleUrl;
                        const winHandles = await this.getWinHandles();
                        const filterUrlWinHandles = winHandles.filter((winHandle) => winHandle.url.includes(baseUrl));
                        // eslint-disable-next-line no-restricted-syntax
                        for (const filterUrlWinHandle of filterUrlWinHandles) {
                            const baseUrlIndex = filterUrlWinHandle.url.indexOf(baseUrl) + baseUrl.length;
                            cutWinHandleUrl = filterUrlWinHandle.url.substring(
                                baseUrlIndex,
                                filterUrlWinHandle.url.length
                            );
                            winHandleId = filterUrlWinHandle.winHandleId;
                            if (cutWinHandleUrl === compareUrl) {
                                break;
                            }
                        }
                        return cutWinHandleUrl === compareUrl;
                    },
                    {
                        timeout: 10000,
                        timeoutMsg: `[ERROR][WindowHandle] ${winHandleId} : Loding timeout : 10000ms `,
                    }
                );
            }
            await Remote.driver.switchToWindow(winHandleId);
        } catch (e) {
            throw new Error(`Error Switch WinHandle URL: ${e}`);
        }
    }

    public static async webvieChromeMoveUrl(Url: string): Promise<void> {
        try {
            await Remote.driver.waitUntil(
                async () => {
                    const contexts = await Remote.driver.getContexts();
                    return contexts.includes('WEBVIEW_chrome');
                },
                {
                    timeout: 10000,
                    timeoutMsg: `[ERROR] not found context WEBVIEW_chrome about 10000`,
                }
            );
            await Remote.driver.switchContext('WEBVIEW_chrome');
            await Remote.driver.url(Url);
        } catch (e) {
            throw new Error(`Error Chrome Webview Move URL : ${e}`);
        }
    }

    public static async getCurrentPackage(): Promise<string> {
        try {
            const pakage = await Remote.driver.getCurrentPackage();
            return pakage;
        } catch (e) {
            throw new Error(`Error Get Current Package : ${e}`);
        }
    }

    public static async terminateApp(packageId: string): Promise<void> {
        try {
            const activity = await Remote.driver.getCurrentActivity();
            await Remote.driver.terminateApp(packageId);
        } catch (e) {
            throw new Error(`Error Terminate App : ${e}`);
        }
    }

    public static async closeApp(): Promise<void> {
        try {
            await Remote.driver.closeApp();
        } catch (e) {
            throw new Error(`Error Close App : ${e}`);
        }
    }

    public static async sessionReload(): Promise<void> {
        await Remote.driver.reloadSession();
    }

    public static async preesKeyCode(keyCodeNumber: number): Promise<void> {
        // 66 : enter
        await Remote.driver.pressKeyCode(keyCodeNumber);
    }
}

export default Driver;
