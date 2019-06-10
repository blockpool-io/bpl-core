import { Container } from "@toucansam-bpl/core-interfaces";
import Rollbar from "rollbar";
import { defaults } from "./defaults";

export const plugin: Container.PluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    alias: "error-tracker",
    async register(container: Container.IContainer, options) {
        return new Rollbar(options);
    },
};
