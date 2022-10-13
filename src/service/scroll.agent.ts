import logger from '../config/log.config.js';
import Remote from '../componet/driver.remote.js';

class Scroll {
    private start: { x: number; y: number };
    private end: { x: number; y: number };
    private durationTime: number;
    constructor(start: { x: number; y: number }, end: { x: number; y: number }, durationTime: number) {
        this.start = start;
        this.end = end;
        this.durationTime = durationTime;
    }

    private async getEndLocation() {
        const endX = this.end.x - this.start.x;
        const endY = this.end.y - this.start.y;
        const endLocation = { x: endX, y: endY };
        return endLocation;
    }

    public async runBasic(): Promise<void> {
        try {
            const endLocation = await this.getEndLocation();
            if (this.durationTime === undefined) this.durationTime = 2000;
            await Remote.driver.performActions([
                {
                    type: 'pointer',
                    id: 'finger1',
                    parameters: { pointerType: 'touch' },
                    actions: [
                        { type: 'pointerMove', duration: 0, x: this.start.x, y: this.start.y },
                        { type: 'pointerDown', button: 0 },
                        { type: 'pause', duration: 10 },
                        {
                            type: 'pointerMove',
                            duration: this.durationTime,
                            origin: 'pointer',
                            x: endLocation.x,
                            y: endLocation.y,
                        },
                        { type: 'pointerUp', button: 0 },
                    ],
                },
            ]);
            logger.debug(
                `Scroll Point : start(x:${this.start.x}, y:${this.start.y}), end(x:${endLocation.x}, y:${endLocation.y}) durationTime:${this.durationTime}`
            );
        } catch (error) {
            throw new Error(`scroll fail : ${error}`);
        }
    }
}

export default Scroll;
