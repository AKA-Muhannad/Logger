import winston, { addColors } from "winston";

class Logger {
    private context: string;
    private loggerInstance: winston.Logger;

    constructor(context: string) {
        this.context = context;
        this.loggerInstance = winston.createLogger({
            level: "debug",
            transports: [
                new winston.transports.Console({
                    format: this.alignColorAndTime(),
                }),
            ],
        });
    }

    private alignColorAndTime() {
        return winston.format.combine(
            winston.format.colorize({
                all: true,
            }),
            winston.format.label({
                label: `[${this.context}]`,
            }),
            winston.format.timestamp({
                format: "YY-MM-DD HH:mm:ss",
            }),
            winston.format.printf(
                (info) =>
                    `${info.label} - ${info.timestamp} - [${info.level}] : ${info.message}`,
            ),
        );
    }

    info(message: string) {
        this.loggerInstance.info(message);
    }

    warn(message: string) {
        this.loggerInstance.warn(message);
    }

    error(message: string) {
        this.loggerInstance.error(message);
    }

    debug(message: string) {
        this.loggerInstance.debug(message);
    }
}

addColors({
    info: "green",
    warn: "yellow",
    error: "red",
    debug: "magenta",
});

export default Logger;
