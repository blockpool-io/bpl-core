import { app } from "@blockpool-io/core-container";
import { Database } from "@blockpool-io/core-interfaces";
import Boom from "@hapi/boom";
import { ServerCache } from "../../services";
import { respondWithCollection } from "../utils";

const delegates = async request => {
    const databaseService = app.resolvePlugin<Database.IDatabaseService>("database");
    const roundsRepository = databaseService.connection.roundsRepository;

    const delegates = await roundsRepository.findById(request.params.id);

    if (!delegates || !delegates.length) {
        return Boom.notFound("Round not found");
    }

    return respondWithCollection(delegates, "round-delegate");
};

export const registerMethods = server => {
    const { activeDelegates, blocktime } = app.getConfig().getMilestone();

    ServerCache.make(server).method("v2.rounds.delegates", delegates, activeDelegates * blocktime, request => ({
        id: request.params.id,
    }));
};
