import { ElementArray } from 'webdriverio';
import logger from '../config/log.config.js';
import xPathService from '../resource/xpath.service.js';
import ElementService from '../service/element.service.js';

function delay(ms: number) {
    return new Promise((resolve1) => setTimeout(resolve1, ms));
}
async function categoryAddress(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryAddress').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryAddress Error : ${e}`);
    }
}

async function categoryAddressInput(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryAddressInput').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryAddressInput Error : ${e}`);
    }
}

async function categoryAddressList(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryAddressList').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryAddressList Error : ${e}`);
    }
}

async function categoryAddressUpdateBottion(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryAddressUpdateBottion').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryAddressUpdateBottion Error : ${e}`);
    }
}

async function categoryAddressEmptyPage(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryAddressEmptyPage').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryAddressEmptyPage Error : ${e}`);
    }
}

async function categoryAllMenu(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryAllMenu').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryAllMenu Error : ${e}`);
    }
}

async function restaurantBestIcon(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryBestRestaurant').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] restaurantBestIcon Error : ${e}`);
    }
}

async function categoryInitFilter(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryInitFilter').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryInitFilter Error : ${e}`);
    }
}

async function categoryFilterGroup(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryFilterGroup').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryFilterGroup Error : ${e}`);
    }
}

async function categoryRankingFilter(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryRankingFilter').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryRankingFilter Error : ${e}`);
    }
}

async function categoryDiscountFilter(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryDiscountFilter').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryDiscountFilter Error : ${e}`);
    }
}

async function categoryCleanFilter(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryCleanFilter').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] categoryCleanFilter Error : ${e}`);
    }
}

async function restaurantNewSale(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategoryRestaurant', 'newSale').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] restaurantNewSale Error : ${e}`);
    }
}

async function restaurantGroup(): Promise<ElementArray> {
    try {
        const elemetInfo: any = {
            xpathValue: xPathService.getXPathElement('appCategory', 'categoryRestaurantGroup').getXPath(),
            retryNo: 10,
        };
        const element = new ElementService(
            elemetInfo.patternValue,
            elemetInfo.patternOption,
            elemetInfo.patternIndex,
            elemetInfo.xpathValue,
            elemetInfo.xpathOption,
            elemetInfo.retryNo
        );
        return await element.runFind();
    } catch (e) {
        throw new Error(`[ERROR] restaurantGroup Error : ${e}`);
    }
}

async function categoryRestaurantInfo(restaurantGroupEl: ElementArray, index: number): Promise<any> {
    try {
        const restaurantNamePath = xPathService.getXPathElement('appCategoryRestaurant', 'restaurantName').getXPath();
        const starCountPath = xPathService.getXPathElement('appCategoryRestaurant', 'starCount').getXPath();
        const reviewPath = xPathService.getXPathElement('appCategoryRestaurant', 'review').getXPath();
        const distancePath = xPathService.getXPathElement('appCategoryRestaurant', 'distance').getXPath();
        const deliveryTimePath = xPathService.getXPathElement('appCategoryRestaurant', 'deliveryTime').getXPath();
        const deliveryFeePath = xPathService.getXPathElement('appCategoryRestaurant', 'deliveryFee').getXPath();
        const restaurantEl = await restaurantGroupEl[index].$(restaurantNamePath);
        const starCountEl = await restaurantGroupEl[index].$$(starCountPath);
        const reviewEl = await restaurantGroupEl[index].$(reviewPath);
        const distanceEl = await restaurantGroupEl[index].$(distancePath);
        const deliveryTimeEl = await restaurantGroupEl[index].$(deliveryTimePath);
        const deliveryFeeEl = await restaurantGroupEl[index].$(deliveryFeePath);
        const restaurant = await restaurantEl.getText();
        let starCount = null;
        if (starCountEl.length > 0) {
            starCount = await starCountEl[0].getText();
        } else {
            const newSaleEl = await restaurantNewSale();
            starCount = newSaleEl[0].getText();
        }
        const review = await reviewEl.getText();
        const distance = await distanceEl.getText();
        const deliveryTime = await deliveryTimeEl.getText();
        const deliveryFee = await deliveryFeeEl.getText();
        const restaurantInfo = {
            restaurant,
            starCount,
            review,
            distance,
            deliveryTime,
            deliveryFee,
        };
        return restaurantInfo;
    } catch (e) {
        throw new Error(`[ERROR] categoryRestaurantInfo Error : ${e}`);
    }
}

async function categoryRestaurantDiscountInfo(restaurantGroupEl: ElementArray, index: number): Promise<any> {
    try {
        const restaurantNamePath = xPathService.getXPathElement('appCategoryRestaurant', 'restaurantName').getXPath();
        const restaurantEl = await restaurantGroupEl[index].$(restaurantNamePath);
        const restaurant = await restaurantEl.getText();
        console.log(`====== rest naem : ${restaurant}`);
        const categoryDiscountPath = xPathService.getXPathElement('appCategoryRestaurant', 'discount').getXPath();
        const categoryDiscountEl = await restaurantGroupEl[index].$(categoryDiscountPath);
        const restaurantDiscount = await categoryDiscountEl.getText();

        const restaurantInfo = {
            restaurant,
            restaurantDiscount,
        };
        return restaurantInfo;
    } catch (e) {
        throw new Error(`[ERROR] categoryRestaurantDiscountInfo Error : ${e}`);
    }
}

async function categoryRestaurantCleanInfo(restaurantGroupEl: ElementArray, index: number): Promise<any> {
    try {
        const restaurantNamePath = xPathService.getXPathElement('appCategoryRestaurant', 'restaurantName').getXPath();
        const restaurantEl = await restaurantGroupEl[index].$(restaurantNamePath);
        const restaurant = await restaurantEl.getText();
        console.log(`====== rest naem : ${restaurant}`);
        const restaurantCleanPath = xPathService.getXPathElement('appCategoryRestaurant', 'clean').getXPath();
        const restaurantCleanEl = await restaurantGroupEl[index].$$(restaurantCleanPath);
        let restaurantClean = '미노출';
        if (restaurantCleanEl.length > 0) {
            restaurantClean = '위생안심';
        }

        const restaurantInfo = {
            restaurant,
            restaurantClean,
        };
        return restaurantInfo;
    } catch (e) {
        throw new Error(`[ERROR] categoryRestaurantDiscountInfo Error : ${e}`);
    }
}

export {
    categoryAddress,
    categoryAddressInput,
    categoryAddressList,
    categoryAddressUpdateBottion,
    categoryAddressEmptyPage,
    categoryAllMenu,
    restaurantBestIcon,
    categoryRankingFilter,
    restaurantGroup,
    categoryRestaurantInfo,
    categoryFilterGroup,
    categoryInitFilter,
    categoryDiscountFilter,
    categoryCleanFilter,
    categoryRestaurantDiscountInfo,
    categoryRestaurantCleanInfo,
};
