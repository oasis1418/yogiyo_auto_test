import logger from './src/config/log.config.js';
import ScenarioFinder from './src/controller/run.controller.js';

let testTarget: any;
let scenarioTitle: any;

async function run() {
    try {
        testTarget = process.argv.slice(2);
        scenarioTitle = process.argv.slice(3);
        logger.info('### Test Automation S T A R T ###########################');
        logger.info(`### Test Target : ${testTarget[0]}`);
        logger.info(`### Test Scenario Title : ${scenarioTitle[0]}`);
        const scenario = new ScenarioFinder(testTarget[0].toString(), scenarioTitle[0].toString());
        scenario.runTest();
    } catch (e) {
        console.log(`[Err] run Error : ${scenarioTitle}`);
    }
}

run();
