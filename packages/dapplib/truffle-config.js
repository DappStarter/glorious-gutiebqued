require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remain upgrade inner enroll flat tip'; 
let testAccounts = [
"0xf89c01a48926e2a19b3efa13148016810dc31860624603343b0468b2b13f7473",
"0xe90ad77fde2b45b981aee87b1c9b8b028b26735ca571c30c328f39040f0f7de0",
"0x670e965e4c404e9210333bb13405c045af3372d59b755f9073d2ce330b9f75e1",
"0x9a3428fdc42d2d1ed4c628a76355c2fa132d0cc159bc2ea1a5b1722d4ab53088",
"0xdac7bc5bcaccc7ce38e98834a264ad128c470e3c5c908750be907f44a75ed018",
"0x3eb0677163cfc9da04265d4730ebb268c91bcbd308797dc89adcd78054c62b3a",
"0x4f2bb36818c6e13be571a83b2056f91f86368cc51a2d15049cf4b48f5a85f2c3",
"0xfe7ed4a27675de2f36d44de010014d9b349d7615ca6c92ea2e3a7adc6ec060a2",
"0x37510588bc7a1ea3ba51d81202fb8f2c0ef210f64a3dd0aa773595bcf6e065c4",
"0xb3a740fa71f56a67a97aed1bfae617849a076106c97744cc2011bf77885eb861"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
