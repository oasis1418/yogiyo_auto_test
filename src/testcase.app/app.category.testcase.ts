import { syncBuiltinESMExports } from 'module';
import logger from '../config/log.config.js';
import * as categoryEl from '../element.app/category.element.js';
import Scroll from '../service/scroll.agent.js';
import ElementAction from '../service/element.action.service.js';
import Remote from '../componet/driver.remote.js';
import xPathService from '../resource/xpath.service.js';

function delay(ms: number) {
    return new Promise((resolve1) => setTimeout(resolve1, ms));
}

async function filterSwipe(rightAndLeft: string) {
    try {
        console.log(`=================filter swipe ==================`);
        const restaurantGroupEl = await categoryEl.categoryFilterGroup();
        const restaurantGroupElAction = await new ElementAction(restaurantGroupEl);
        const restaurantGroupElLocation: any = await restaurantGroupElAction.getLocation(0);
        console.log(restaurantGroupElLocation);
        if (rightAndLeft === 'left') {
            const initScroll = await new Scroll(
                { x: 100, y: restaurantGroupElLocation.y + 40 },
                { x: 900, y: restaurantGroupElLocation.y + 20 },
                2000
            );
            await initScroll.runBasic();
        } else {
            const initScroll = await new Scroll(
                { x: 900, y: restaurantGroupElLocation.y + 40 },
                { x: 100, y: restaurantGroupElLocation.y + 40 },
                2000
            );
            await initScroll.runBasic();
        }
    } catch (e) {
        throw new Error(`[ERROR] filterSwipe Error : ${e}`);
    }
}

async function allCategoryhMoveCheckTestCase() {
    try {
        await delay(3000);
        const scrollFirst = await new Scroll({ x: 400, y: 1000 }, { x: 580, y: 1000 }, 1000);
        await scrollFirst.runBasic();
        const footerButtonsEl = await categoryEl.categoryAddress();
        if (footerButtonsEl.length > 0) {
            logger.info(`[APP][카테고리] 주소 정보 노출 확인 (성공)`);
        } else {
            logger.info(`[APP][카테고리] 주소 정보 노출 확인 (실패)`);
        }
    } catch (e) {
        throw new Error(`[ERROR] allCategoryhMoveCheckTestCase Error : ${e}`);
    }
}

async function restaurantListInitScroll() {
    try {
        const restaurantBestEl = await categoryEl.restaurantBestIcon();
        const restaurantBestElAction = await new ElementAction(restaurantBestEl);
        const restaurantBestLocation: any = await restaurantBestElAction.getLocation(0);
        console.log(restaurantBestLocation);

        const scroll = await new Scroll(
            { x: restaurantBestLocation.x, y: restaurantBestLocation.y },
            { x: restaurantBestLocation.x, y: 420 },
            3000
        );
        await scroll.runBasic();
    } catch (e) {
        throw new Error(`[ERROR] restaurantListInitScroll Error : ${e}`);
    }
}

async function restaurantScroll() {
    try {
        const restaurantGroupEl = await categoryEl.restaurantGroup();
        const restaurantGroupElAction = await new ElementAction(restaurantGroupEl);
        const restaurantGroupLocation: any = await restaurantGroupElAction.getLocation(4);

        console.log(restaurantGroupLocation);

        const scroll = await new Scroll(
            { x: restaurantGroupLocation.x, y: restaurantGroupLocation.y },
            { x: restaurantGroupLocation.x, y: 520 },
            3000
        );
        await scroll.runBasic();
    } catch (e) {
        throw new Error(`[ERROR] restaurantScroll Error : ${e}`);
    }
}

async function restaurantListInfoCheckTestCase() {
    try {
        const restaurantList = [];
        await restaurantListInitScroll();
        const restaurantGroupEl = await categoryEl.restaurantGroup();
        let k = 0;
        while (restaurantList.length < 19) {
            for (let i = 0; i < 4; i += 1) {
                k += 1;
                // eslint-disable-next-line no-await-in-loop
                const restaurantInfo = await categoryEl.categoryRestaurantInfo(restaurantGroupEl, i);
                restaurantList.push(restaurantInfo);
                logger.info(
                    `[APP][카테고리] Restaurant 필수 값 노출 확인 (${k}) : ${JSON.stringify(restaurantInfo)} (성공)`
                );
                if (k > 19) {
                    return;
                }
            }

            // eslint-disable-next-line no-await-in-loop
            await restaurantScroll();
        }
    } catch (e) {
        throw new Error(`[ERROR] categoryRestaurantInfoCheckTestCase Error : ${e}`);
    }
}

async function restaurantListDiscountFilterTestCase() {
    try {
        await delay(2000);
        const scrollFirst = await new Scroll({ x: 400, y: 1000 }, { x: 580, y: 1000 }, 1000);
        await scrollFirst.runBasic();
        await filterSwipe('left');
        await delay(2000);
        const discountFilter = await categoryEl.categoryDiscountFilter();
        await discountFilter[0].click();
        await delay(2000);
        const restaurantList = [];
        await restaurantListInitScroll();
        let k = 0;
        while (restaurantList.length < 19) {
            // eslint-disable-next-line no-await-in-loop
            const restaurantGroupEl = await categoryEl.restaurantGroup();
            for (let i = 0; i < 4; i += 1) {
                k += 1;
                // eslint-disable-next-line no-await-in-loop
                const restaurantInfo = await categoryEl.categoryRestaurantDiscountInfo(restaurantGroupEl, i);
                restaurantList.push(`discount filter info : ${restaurantInfo}`);
                logger.info(
                    `[APP][카테고리] 레스토랑 리스트 할인중 필터 기능 확인 (${k}) : ${JSON.stringify(
                        restaurantInfo
                    )} (성공)`
                );
                if (k > 19) {
                    return;
                }
            }
            // eslint-disable-next-line no-await-in-loop
            await restaurantScroll();
        }
    } catch (e) {
        throw new Error(`[ERROR] restaurantListDiscountFilterTestCase Error : ${e}`);
    }
}

async function restaurantListCleanFilterTestCase() {
    try {
        await delay(5000);
        await filterSwipe('left');
        await delay(2000);
        const initFilter = await categoryEl.categoryInitFilter();
        await initFilter[0].click();
        await delay(2000);
        const scrollFirst1 = await new Scroll({ x: 400, y: 1000 }, { x: 580, y: 1000 }, 1000);
        await scrollFirst1.runBasic();
        await delay(2000);
        await filterSwipe('right');
        await delay(2000);
        const cleanFilter = await categoryEl.categoryCleanFilter();
        await cleanFilter[0].click();
        await delay(2000);
        const scrollFirst2 = await new Scroll({ x: 400, y: 1000 }, { x: 580, y: 1000 }, 1000);
        await scrollFirst2.runBasic();
        console.log(`=================init scroll swipe ==================`);
        const restaurantList = [];
        await restaurantListInitScroll();
        let k = 0;
        while (restaurantList.length < 19) {
            // eslint-disable-next-line no-await-in-loop
            const restaurantGroupEl = await categoryEl.restaurantGroup();
            for (let i = 0; i < 4; i += 1) {
                k += 1;
                // eslint-disable-next-line no-await-in-loop
                const restaurantInfo = await categoryEl.categoryRestaurantCleanInfo(restaurantGroupEl, i);
                restaurantList.push(`clean filter info : ${restaurantInfo}`);
                logger.info(
                    `[APP][카테고리] 레스토랑 리스트 위생안심 필터 기능 확인 (${k}) : ${JSON.stringify(
                        restaurantInfo
                    )} (성공)`
                );
                if (k > 19) {
                    return;
                }
            }

            // eslint-disable-next-line no-await-in-loop
            await restaurantScroll();
        }
    } catch (e) {
        throw new Error(`[ERROR] restaurantListCleanFilterTestCase Error : ${e}`);
    }
}

async function restaurantListEmptyTestCase() {
    try {
        const categoryAddressEl = await categoryEl.categoryAddress();
        await categoryAddressEl[0].click();
        await delay(2000);
        const categoryAddressInputEl = await categoryEl.categoryAddressInput();
        await categoryAddressInputEl[0].click();
        await delay(1000);
        await categoryAddressInputEl[0].setValue('낭도');
        await delay(1000);
        await Remote.driver.pressKeyCode(66);
        await delay(2000);
        const categoryAddressListEl = await categoryEl.categoryAddressList();
        await categoryAddressListEl[0].click();
        await delay(2000);
        const scrollFirst = await new Scroll({ x: 400, y: 1000 }, { x: 400, y: 500 }, 1000);
        await scrollFirst.runBasic();
        await delay(3000);
        const categoryAddressUpdateBottionEl = await categoryEl.categoryAddressUpdateBottion();
        await categoryAddressUpdateBottionEl[0].click();
        await delay(3000);
        const categoryAddressEmptyPageEl = await Remote.driver.$$(
            xPathService.getXPathElement('appCategory', 'categoryAddressEmptyPage').getXPath()
        );
        if (categoryAddressEmptyPageEl.length > 0) {
            logger.info(`[APP][카테고리] 레스토랑 리스트 없을 경우 빈 페이지 노출 확인 (성공)`);
        } else {
            logger.info(`[APP][카테고리] 레스토랑 리스트 없을 경우 빈 페이지 노출 확인 (실패)`);
        }
    } catch (e) {
        throw new Error(`[ERROR] restaurantListEmptyTestCase Error : ${e}`);
    }
}

export {
    filterSwipe,
    allCategoryhMoveCheckTestCase,
    restaurantListInfoCheckTestCase,
    restaurantListDiscountFilterTestCase,
    restaurantListCleanFilterTestCase,
    restaurantListEmptyTestCase,
};
