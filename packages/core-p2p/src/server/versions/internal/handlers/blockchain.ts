import { app } from "@toucansam-bpl/core-container";
import { Blockchain, Logger } from "@toucansam-bpl/core-interfaces";

const logger = app.resolvePlugin<Logger.ILogger>("logger");

/**
 * @type {Object}
 */
export const sync = {
    /**
     * @param  {Hapi.Request} request
     * @param  {Hapi.Toolkit} h
     * @return {Hapi.Response}
     */
    async handler(request, h) {
        logger.debug("Blockchain sync check WAKEUP requested by forger :bed:");

        app.resolvePlugin<Blockchain.IBlockchain>("blockchain").forceWakeup();

        return h.response(null).code(204);
    },
};
