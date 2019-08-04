import { app } from "@blockpool-io/core-container";
import { EventEmitter } from "@blockpool-io/core-interfaces";
import { SnapshotManager } from "@blockpool-io/core-snapshots";
import { flags } from "@oclif/command";
import cliProgress from "cli-progress";
import { chooseSnapshot, setUpLite } from "../../helpers/snapshot";
import { CommandFlags } from "../../types";
import { BaseCommand } from "../command";

export class RestoreCommand extends BaseCommand {
    public static description: string = "import data from specified snapshot";

    public static flags: CommandFlags = {
        ...BaseCommand.flagsSnapshot,
        blocks: flags.string({
            description: "blocks to import, correlates to folder name",
        }),
        truncate: flags.boolean({
            description: "empty all tables before running import",
        }),
        skipRestartRound: flags.boolean({
            description: "skip revert to current round",
        }),
        verifySignatures: flags.boolean({
            description: "signature verification",
        }),
    };

    public async run(): Promise<void> {
        const { flags } = await this.parseWithNetwork(RestoreCommand);

        await setUpLite(flags);

        if (!app.has("snapshots")) {
            this.error("The @blockpool-io/core-snapshots plugin is not installed.");
        }

        if (!flags.blocks) {
            try {
                await chooseSnapshot(flags, "What snapshot do you want to restore?");
            } catch (error) {
                this.error(error.message);
            }
        }

        const emitter = app.resolvePlugin<EventEmitter.EventEmitter>("event-emitter");

        const progressBar = new cliProgress.Bar(
            {
                format: "{bar} {percentage}% | ETA: {eta}s | {value}/{total} | Duration: {duration}s",
            },
            cliProgress.Presets.shades_classic,
        );

        emitter.on("start", data => {
            progressBar.start(data.count, 1);
        });

        emitter.on("progress", data => {
            progressBar.update(data.value);
        });

        emitter.on("complete", data => {
            progressBar.stop();
        });

        await app.resolvePlugin<SnapshotManager>("snapshots").import(flags);
    }
}
