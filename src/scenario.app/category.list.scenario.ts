import logger from '../config/log.config.js';
import { mainMoveTestCase, allCategoryhMoveTestCase } from '../testcase.app/app.main.testcase.js';
import {
    allCategoryhMoveCheckTestCase,
    restaurantListInfoCheckTestCase,
    restaurantListDiscountFilterTestCase,
    restaurantListCleanFilterTestCase,
    restaurantListEmptyTestCase,
} from '../testcase.app/app.category.testcase.js';

async function AppRestaurantListTestScenario() {
    try {
        await mainMoveTestCase();
        await allCategoryhMoveTestCase();
        await allCategoryhMoveCheckTestCase();
        await restaurantListInfoCheckTestCase();
        await restaurantListDiscountFilterTestCase();
        await restaurantListCleanFilterTestCase();
        await restaurantListEmptyTestCase();
    } catch (e) {
        logger.info(`[APP][카테고리] Restaurant List 시나리오 테스트 (실패)`);
    }
}

export default AppRestaurantListTestScenario;
