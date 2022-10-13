import Remote from '../componet/driver.remote.js';

class DeviceService {
    public static async backButton(): Promise<void> {
        try {
            await Remote.driver.back();
        } catch (error) {
            throw new Error(`Device Action (backbutton) Click Error : ${error}`);
        }
    }

    public static async doubleBackButton(): Promise<void> {
        try {
            await Remote.driver.back();
            await Remote.driver.back();
        } catch (error) {
            throw new Error(`Device Action (double backbutton) Click Error : ${error}`);
        }
    }
}

export default DeviceService;
