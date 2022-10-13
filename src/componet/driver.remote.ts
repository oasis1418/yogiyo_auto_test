import wdio from 'webdriverio';
import logger from '../config/log.config.js';

class Remote {
    public static driver: WebdriverIO.Browser;

    private static appDefaultCapability() {
        const defaultCapability = {
            platformName: 'Android', // 고정
            automationName: 'Appium', // 고정
            appPackage: 'com.fineapp.yogiyo', // 고정
            appActivity: 'kr.co.yogiyo.ui.intro.IntroActivity', // 사용자가 패키지에서 시작하려는 응용 프로그램 활동( 고정)
            chromedriverExecutableDir: `${process.env.CWD}/resource/driver`,
            newCommandTimeout: 36000, // appium 호출이 없을 때 대기 시간
            noReset: true,
            autoGrantPermissions: true,
            // ignoreUnimportantViews: true, // 고정
        };
        return defaultCapability;
    }

    private static webDefaultCapability() {
        const defaultCapability = {
            // runner: process.env.SELENIUM_HUB_IP, // currently only "local" is supported
            // port: parseInt(process.env.SELENIUM_CHROME_PORT as string),
            // path: '/wd/hub',
            capabilities: {
                browserName: 'chrome',
                acceptInsecureCerts: true,
                'goog:chromeOptions': {
                    args: [
                        '--disable-dev-shm-usage',
                        '--no-sandbox',
                        '--enable-automation',
                        '--disable-gpu',
                        // "--headless", // 웹 윈도우 안보이기
                        '--window-size=1920,1040', // Window Size
                    ],
                },
            },
        };
        return defaultCapability;
    }

    public static async appCapability() {
        try {
            const capability = this.appDefaultCapability();
            const dc: wdio.RemoteOptions = {
                port: 4723,
                path: '/wd/hub',
                capabilities: capability,
            };
            this.driver = await wdio.remote(dc);
        } catch (e) {
            throw new Error(`WDIO APP Connect Error :  ${e}`);
        }
    }

    public static async webCapability() {
        try {
            const dc = this.webDefaultCapability();
            this.driver = await wdio.remote(dc);
        } catch (e) {
            throw new Error(`WDIO WEB Connect Error :  ${e}`);
        }
    }
}

export default Remote;
