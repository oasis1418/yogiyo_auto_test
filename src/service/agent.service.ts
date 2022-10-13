import adbDevicesCmd from '../componet/cmd.js';

class AgentService {
    public static async getAgentStatus() {
        try {
            return await adbDevicesCmd();
        } catch (e) {
            throw new Error(`Get Agent Status Error : ${e}`);
        }
    }
}

export default AgentService;
