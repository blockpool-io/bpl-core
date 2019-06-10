import { TransactionPool } from "@toucansam-bpl/core-interfaces";

export class ConnectionFactory {
    public async make(connection: TransactionPool.IConnection): Promise<TransactionPool.IConnection> {
        return connection.make();
    }
}
