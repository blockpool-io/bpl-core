import { flags } from "@oclif/command";
import { AbstractStartCommand } from "../../shared/start";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class StartCommand extends AbstractStartCommand {
    public static description: string = "Start the relay";

    public static examples: string[] = [
        `Run a relay with a pm2 daemon
$ bpl relay:start --network=mainnet
`,
        `Run a genesis relay
$ bpl relay:start --networkStart
`,
        `Disable any discovery by other peers
$ bpl relay:start --disableDiscovery
`,
        `Skip the initial discovery
$ bpl relay:start --skipDiscovery
`,
        `Ignore the minimum network reach
$ bpl relay:start --ignoreMinimumNetworkReach
`,
        `Start a seed
$ bpl relay:start --launchMode=seed
`,
        `Run a relay without a daemon
$ bpl relay:start --no-daemon
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsBehaviour,
        daemon: flags.boolean({
            description: "start the process as a daemon",
            default: true,
            allowNo: true,
        }),
        suffix: flags.string({
            hidden: true,
            default: "relay",
        }),
        env: flags.string({
            default: "production",
        }),
    };

    public getClass() {
        return StartCommand;
    }

    protected async runProcess(flags: CommandFlags): Promise<void> {
        this.abortRunningProcess(`${flags.token}-core`);

        await this.runWithPm2(
            {
                name: `${flags.token}-relay`,
                // @ts-ignore
                script: this.config.options.root,
                args: `relay:run ${this.flagsToStrings(flags, ["daemon"])}`,
            },
            flags,
        );
    }
}
