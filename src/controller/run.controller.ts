import logger from '../config/log.config.js';
import Driver from '../service/driver.service.js';
import AppRestaurantListTestScenario from '../scenario.app/category.list.scenario.js';
import searchScenario from '../scenario.web/main.check.scenario.js';

class ScenarioFinder {
    private testTarget: string;
    private scenarioTitle: string;
    constructor(testTarget: string, scenarioTitle: string) {
        this.testTarget = testTarget;
        this.scenarioTitle = scenarioTitle;
    }

    private async webTestCase() {
        await Driver.webRemote();
        await Driver.navigate('https://www.yogiyo.co.kr');
        switch (this.scenarioTitle) {
            case 'WebTestScenario':
                await searchScenario();
                return;
            case 'test':
                return;
            default:
                throw new Error(`[ERROR][WEB] ${this.scenarioTitle} >> 시나리오가 없습니다.`);
        }
    }

    private async appTestCase() {
        await Driver.appRemote();
        switch (this.scenarioTitle) {
            case 'AppRestaurantListTestScenario':
                await AppRestaurantListTestScenario();
                return;
            default:
                throw new Error(`[ERROR][APP] ${this.scenarioTitle} >> 시나리오가 없습니다.`);
        }
    }

    public async runTest() {
        if (this.testTarget === 'Web') {
            this.webTestCase();
        } else {
            this.appTestCase();
        }
    }
}

export default ScenarioFinder;
