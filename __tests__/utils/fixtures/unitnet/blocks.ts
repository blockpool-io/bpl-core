import { Utils } from "@blockpool-io/crypto";
import { genesisBlock } from "../../config/unitnet/genesisBlock";

export { genesisBlock };

export const block2 = {
    blockSignature:
        "304402203e01a7d6fffcc23807f0504d96e0e724d435fad8d5c91702ea86fe3d48171746022000ccf36a7a480a3e50ac4e9b2bcf5bcc4e5f63d4718af356cde33c77d30bfe68",
    generatorPublicKey: "02778aa3d5b332965ea2a5ef6ac479ce2478535bc681a098dff1d683ff6eccc417",
    height: 2,
    id: "8791037955102127843",
    idHex: "7a000a7178d6b6e3",
    numberOfTransactions: 10,
    payloadHash: "9e796f4f211be70f3df3cbd013322d1c6d4e678168f64b363f352ab43694ff55",
    payloadLength: 320,
    previousBlock: "4881670189836572019",
    previousBlockHex: "43bf2d2c67d29573",
    timestamp: 1,
    reward: Utils.BigNumber.make(0),
    totalAmount: Utils.BigNumber.make(20),
    totalFee: Utils.BigNumber.make(100000000),
    transactions: [
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "2a4fb2f25eb201a989d5f3634c1b0d15336d9580b58dfdcbaa133c963a390d67",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "304402203994e720906016de43beb11d39f82b5b3325eac56dcffed5b433982aea5fcb9f0220179c0e89353709a4715ec7f1b37081e47d976fae5ebf96f9d86e48e7bc4ba7bf",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 5",
            vendorFieldHex: "54657374205472616e73616374696f6e2035",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "2a64b5fe72fb061c91ecb159e1d8d40176e06e9292d85492c8a49971add6b849",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "3044022023555b3becfa444fcbe68f39bd6d38e7b41546aed89a57ccb5078cea8e35d9cf02205a86d2a5c2bb9cfb0e72daab15762b4d8dd64c885d81c77175a169376ec6cae5",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 10",
            vendorFieldHex: "54657374205472616e73616374696f6e203130",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "37ae8d0517fb5e65c27d85cd4c7211e4238854bf115f9b94879ddd63901276fd",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "304402201034be20d5fe44a23237e522e1618a2bb0dc53d2c0c38e18759e853c62a9bb8c02200d548c6ca9fcfc6cbdb85ad8c6ca58ca8c19580f108a1b3c6b5de1aa7a7e5745",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 8",
            vendorFieldHex: "54657374205472616e73616374696f6e2038",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "40562743b6826a054809e9ab7924f67a3e58d5cf4beed80d3e5cfa344f59bb70",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "304402207e7aacb0e2ad13a0efe0e2528420f3599462d4f1fe487ad0916fbff3e4511a05022021370c03734b4e744d3f411399ac59581bfcf8b6aa13cfbfe6c2dbb359e24c38",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 3",
            vendorFieldHex: "54657374205472616e73616374696f6e2033",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "6430c39e8716c94cfa86c615e8cfede4e734e5722c454b7cc46833ff2e27898b",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "3045022100e8dd3defac4355b7f770a59b5e9fa6a18380b0202aa249ed7ef53cdb2fd1b480022024fd05b6ec595a78ee1c6241a85367a06b07fc9ac9f3e8c37bb6acf160f71a8f",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 1",
            vendorFieldHex: "54657374205472616e73616374696f6e2031",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "84654b97e5e1de1f750e98cb0f9b54561326d95c8ebd385579d28dbaf6b6f22c",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "3045022100bfbf22680ea697e6945f3ebe5a4969f57553e216078c01c6099556d8929ee7af02201f45d93c2835a4945b0db92cc7b048f3e2d3faae20998830e77cd3956938c06e",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 4",
            vendorFieldHex: "54657374205472616e73616374696f6e2034",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "8780a5028b92d7978c135be25abc0f7feb5e4c3c6b921e350d2efae74bc93b20",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "3045022100b54f50019c9a88b19d6fd818c28fd599c1ced9642cf4f6dbcf27808ffecd16c402203592cf05dac4f391b63cb329b9912162160d3fe7b9d9431f9da8db3baaecc3e2",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 2",
            vendorFieldHex: "54657374205472616e73616374696f6e2032",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "927ffb96dbc41f5ca986961393b148d30b8824d807d182d86d5e902325dd31d0",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "3044022063e545f2d7e76c0462ff77a15a37914dfcbd7fadfbcff4aaba6cb14266914401022062ea215e62c78ef0e52bb2d3772fa8741629b83e9588050f0442982641be21a1",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 9",
            vendorFieldHex: "54657374205472616e73616374696f6e2039",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "bb80344684fb879bd11f162525618c72cea2e2aa9b09244dd7d07ea1121f550a",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "3045022100f34cb7450d21b4831294f2d86ebff36645aa90fe5c8e031025a8c210d8cbcd6f022031b53ad0a0163859a72c659ac45762980de5aca47e60ef1d9aea6c08d1c39cd7",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 6",
            vendorFieldHex: "54657374205472616e73616374696f6e2036",
            version: 1,
        },
        {
            amount: Utils.BigNumber.make(2),
            expiration: 0,
            fee: Utils.BigNumber.make(10000000),
            id: "d0920f9e20f3946ea2530db4d9342b66848e759dc0d0ed9e4c9d3db035ffdb51",
            network: 23,
            recipientId: "AJJqpHNtEs26scVRiwiLgnR4PSFKxjBmB9",
            senderPublicKey: "03d04acca0ad922998d258438cc453ce50222b0e761ae9a499ead6a11f3a44b70b",
            signature:
                "304402207154f9daff22f4c91035d36fd29056e93f0914bd4b5a2ba30a009cd26f34835702206b77627e5d2f81d066d4c250cb29a6d6b05c5dea2396edcbd98f18a3cf807350",
            timestamp: 58557033,
            type: 0,
            vendorField: "Test Transaction 7",
            vendorFieldHex: "54657374205472616e73616374696f6e2037",
            version: 1,
        },
    ],
    version: 0,
};
