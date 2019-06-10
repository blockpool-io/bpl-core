import { app } from "@toucansam-bpl/core-container";
import { Logger } from "@toucansam-bpl/core-interfaces";
import { roundCalculator } from "@toucansam-bpl/core-utils";
import { models, slots } from "@toucansam-bpl/crypto";

export const validateGenerator = async (block: models.Block): Promise<boolean> => {
    const database = app.resolvePlugin("database");
    const logger = app.resolvePlugin<Logger.ILogger>("logger");

    const roundInfo = roundCalculator.calculateRound(block.data.height);
    const delegates = await database.getActiveDelegates(roundInfo);
    const slot = slots.getSlotNumber(block.data.timestamp);
    const forgingDelegate = delegates[slot % delegates.length];

    const generatorUsername = database.walletManager.findByPublicKey(block.data.generatorPublicKey).username;

    if (!forgingDelegate) {
        logger.debug(
            `Could not decide if delegate ${generatorUsername} (${
                block.data.generatorPublicKey
            }) is allowed to forge block ${block.data.height.toLocaleString()}`,
        );
    } else if (forgingDelegate.publicKey !== block.data.generatorPublicKey) {
        const forgingUsername = database.walletManager.findByPublicKey(forgingDelegate.publicKey).username;

        logger.warn(
            `Delegate ${generatorUsername} (${
                block.data.generatorPublicKey
            }) not allowed to forge, should be ${forgingUsername} (${forgingDelegate.publicKey})`,
        );

        return false;
    }

    logger.debug(
        `Delegate ${generatorUsername} (${
            block.data.generatorPublicKey
        }) allowed to forge block ${block.data.height.toLocaleString()}`,
    );

    return true;
};
