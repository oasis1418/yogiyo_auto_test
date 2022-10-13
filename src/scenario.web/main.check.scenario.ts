import logger from '../config/log.config.js';
import mainSearchTestCase from '../testcase.web/web.main.testcase.js';

async function searchScenario() {
    try {
        await mainSearchTestCase();
        logger.info(`[WEB][메인] 앱 실행 메인 확인-성공`);
        logger.info(`[WEB][메인] 메인 검색-성공`);
    } catch (e) {
        throw new Error(`[ERROR] addWishTest Error`);
    }
}

export default searchScenario;
