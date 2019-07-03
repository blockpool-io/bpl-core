import { flags } from "@oclif/command";
import { AbstractStartCommand } from "../../shared/start";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class StartCommand extends AbstractStartCommand {
    public static description: string = "Start the core";

    public static examples: string[] = [
        `Run core with a daemon
$ bpl core:start
`,
        `Run core as genesis
$ bpl core:start --networkStart
`,
        `Disable any discovery by other peers
$ bpl core:start --disableDiscovery
`,
        `Skip the initial discovery
$ bpl core:start --skipDiscovery
`,
        `Ignore the minimum network reach
$ bpl core:start --ignoreMinimumNetworkReach
`,
        `Start a seed
$ bpl core:start --launchMode=seed
`,
        `Run core without a daemon
$ bpl core:start --no-daemon
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsBehaviour,
        ...BaseCommand.flagsForger,
        daemon: flags.boolean({
            description: "start the process as a daemon",
            default: true,
            allowNo: true,
        }),
        suffix: flags.string({
            hidden: true,
            default: "core",
        }),
    };

    public getClass() {
        return StartCommand;
    }

    protected async runProcess(flags: CommandFlags): Promise<void> {
        this.abortRunningProcess(`${flags.token}-forger`);
        this.abortRunningProcess(`${flags.token}-relay`);

        try {
            await this.buildBIP38(flags);

            await this.runWithPm2(
                {
                    name: `${flags.token}-core`,
                    // @ts-ignore
                    script: this.config.options.root,
                    args: `core:run ${this.flagsToStrings(flags, ["daemon"])}`,
                },
                flags,
            );
        } catch (error) {
            this.error(error.message);
        }
    }
}
