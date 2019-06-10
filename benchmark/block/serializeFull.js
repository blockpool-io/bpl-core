const {
    models
} = require('@toucansam-bpl/crypto')

const data = require('../helpers').getJSONFixture('block/deserialized/transactions');

exports['core'] = () => {
    return models.Block.serializeFull(data);
};
