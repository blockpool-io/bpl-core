import { app } from "@blockpool-io/core-container";
import { SnapshotManager } from "@blockpool-io/core-snapshots";
import { setUpLite } from "../utils";
import { BaseCommand } from "./command";

export class TruncateCommand extends BaseCommand {
    public static description: string = "truncate blockchain database";

    public async run(): Promise<void> {
        // tslint:disable-next-line:no-shadowed-variable
        const { flags } = this.parse(TruncateCommand);

        await setUpLite(flags);

        await app.resolvePlugin<SnapshotManager>("snapshots").truncateChain();
    }
}
