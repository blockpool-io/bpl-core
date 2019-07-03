import "../../../../../packages/core-jest-matchers/src/transactions/types/transfer";

import { constants } from "@blockpool-io/crypto";
const { TransactionTypes } = constants;

describe(".toBeTransferType", () => {
    test("passes when given a valid transaction", () => {
        expect({ type: TransactionTypes.Transfer }).toBeTransferType();
    });

    test("fails when given an invalid transaction", () => {
        expect(expect({ type: "invalid" }).toBeTransferType).toThrowError(
            "Expected value to be a valid Transfer transaction.",
        );
    });
});
