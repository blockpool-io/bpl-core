import { flags } from "@oclif/command";
import { app } from "@toucansam-bpl/core-container";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
    public static description: string = "Run the core (without pm2)";

    public static examples: string[] = [
        `Run core
$ ark core:run
`,
        `Run core as genesis
$ ark core:run --networkStart
`,
        `Disable any discovery by other peers
$ ark core:run --disableDiscovery
`,
        `Skip the initial discovery
$ ark core:run --skipDiscovery
`,
        `Ignore the minimum network reach
$ ark core:run --ignoreMinimumNetworkReach
`,
        `Start a seed
$ ark core:run --launchMode=seed
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsBehaviour,
        ...BaseCommand.flagsForger,
        suffix: flags.string({
            hidden: true,
            default: "core",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RunCommand);

        await this.buildApplication(app, flags, {
            options: {
                "@toucansam-bpl/core-p2p": this.buildPeerOptions(flags),
                "@toucansam-bpl/core-blockchain": {
                    networkStart: flags.networkStart,
                },
                "@toucansam-bpl/core-forger": await this.buildBIP38(flags),
            },
        });
    }
}
