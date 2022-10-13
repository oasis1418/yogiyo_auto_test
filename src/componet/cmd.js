import cmd from 'node-cmd';
import os from 'os';

async function adbDevicesCmd() {
    const deviceUuidData = await cmd.runSync(`adb devices`);
    let deviceUuid = deviceUuidData.data;
    deviceUuid = deviceUuid.substring(deviceUuid.indexOf('attached') + 9, deviceUuid.indexOf('device', 20) - 1);
    if (deviceUuid.includes('device')) {
        return null;
    }
    return deviceUuid;
}
export async function adbAppVersionCmd(appName) {
    const osType = os.type();
    let versionData;
    if (osType.includes('Window')) {
        versionData = await cmd.runSync(`adb shell dumpsys package ${appName} | findstr versionName`);
    } else {
        versionData = await cmd.runSync(`adb shell dumpsys package ${appName} | grep versionName`);
    }
    const version = versionData.data;
    const versionIndex = version.indexOf('versionName=');
    return version.substring(versionIndex + 12, versionIndex + 18);
}

export default adbDevicesCmd;
