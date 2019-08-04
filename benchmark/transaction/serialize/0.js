const {
    Transactions
} = require('@blockpool-io/crypto')

const data = require('../../helpers').getJSONFixture('transaction/deserialized/0');

exports['core'] = () => {
    return Transactions.Utils.toBytes(data);
};
