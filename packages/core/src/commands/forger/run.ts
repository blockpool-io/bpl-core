import { app } from "@blockpool-io/core-container";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RunCommand extends BaseCommand {
    public static description: string = "Run the forger (without pm2)";

    public static examples: string[] = [
        `Run a forger with a bip39 passphrase
$ ark forger:run --bip39="..."
`,
        `Run a forger with an encrypted bip38
$ ark forger:run --bip38="..." --password="..."
`,
    ];

    public static flags: CommandFlags = {
        ...BaseCommand.flagsNetwork,
        ...BaseCommand.flagsForger,
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RunCommand);

        await this.buildApplication(app, flags, {
            include: [
                "@blockpool-io/core-event-emitter",
                "@blockpool-io/core-config",
                "@blockpool-io/core-logger",
                "@blockpool-io/core-logger-pino",
                "@blockpool-io/core-forger",
            ],
            options: {
                "@blockpool-io/core-forger": await this.buildBIP38(flags),
            },
        });
    }
}
