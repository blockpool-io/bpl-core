import "../../../../../packages/core-jest-matchers/src/transactions/types/ipfs";

import { constants } from "@toucansam-bpl/crypto";
const { TransactionTypes } = constants;

describe(".toBeIpfsType", () => {
    test("passes when given a valid transaction", () => {
        expect({ type: TransactionTypes.Ipfs }).toBeIpfsType();
    });

    test("fails when given an invalid transaction", () => {
        expect(expect({ type: "invalid" }).toBeIpfsType).toThrowError("Expected value to be a valid IPFS transaction.");
    });
});
