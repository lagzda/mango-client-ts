import { MangoClient, MangoGroup } from './client';
import IDS from './ids.json';

export { MangoClient, MangoGroup, MarginAccount, tokenToDecimals } from './client';
export { MangoIndexLayout, MarginAccountLayout, MangoGroupLayout } from './layout';
export * from './layout';
export * from './utils'

export { IDS }

// async function tests() {
//   const cluster = "mainnet-beta";
//   const client = new MangoClient();
//   const clusterIds = IDS[cluster]
//
//   const connection = new Connection(IDS.cluster_urls[cluster], 'singleGossip')
//   const mangoGroupPk = new PublicKey(clusterIds.mango_groups['BTC_ETH_USDT'].mango_group_pk);
//   const mangoProgramId = new PublicKey(clusterIds.mango_program_id);
//
//   const keyPairPath = process.env.KEYPAIR || homedir() + '/.config/solana/id.json'
//   const payer = new Account(JSON.parse(fs.readFileSync(keyPairPath, 'utf-8')))
//
//   async function testSolink() {
//
//     const oraclePk = new PublicKey(IDS[cluster].oracles['ETH/USDT'])
//     const agg = await Aggregator.loadWithConnection(oraclePk, connection)
//
//     // const agg = await Aggregator.loadWithConnection(oraclePk, connection)
//     console.log(agg.answer.median.toNumber(), agg.answer.updatedAt.toNumber(), agg.round.id.toNumber())
//
//   }
//
//   async function testDepositSrm() {
//     const srmVaultPk = new PublicKey(clusterIds['mango_groups']['BTC_ETH_USDT']['srm_vault_pk'])
//     const mangoGroup = await client.getMangoGroup(connection, mangoGroupPk, srmVaultPk)
//     const srmAccountPk = new PublicKey("6utvndL8EEjpwK5QVtguErncQEPVbkuyABmXu6FeygeV")
//     const mangoSrmAccountPk = await client.depositSrm(connection, mangoProgramId, mangoGroup, payer, srmAccountPk, 100)
//     console.log(mangoSrmAccountPk.toBase58())
//     await sleep(2000)
//     const mangoSrmAccount = await client.getMangoSrmAccount(connection, mangoSrmAccountPk)
//     const txid = await client.withdrawSrm(connection, mangoProgramId, mangoGroup, mangoSrmAccount, payer, srmAccountPk, 50)
//     console.log('success', txid)
//   }
//
//   async function getMarginAccountDetails() {
//     const mangoGroup = await client.getMangoGroup(connection, mangoGroupPk);
//     const marginAccountPk = new PublicKey("6vAry8oHVvWqPJV6SMzzJ9EcQr5kkQYHef6ui2ewaagQ")
//     const marginAccount = await client.getMarginAccount(connection, marginAccountPk, mangoGroup.dexProgramId)
//     const prices = await mangoGroup.getPrices(connection)
//
//     console.log(marginAccount.toPrettyString(mangoGroup, prices))
//     console.log(marginAccount.beingLiquidated)
//     console.log(marginAccount.getUiDeposit(mangoGroup, 0), marginAccount.getUiBorrow(mangoGroup, 0))
//     console.log(marginAccount.getUiDeposit(mangoGroup, 1), marginAccount.getUiBorrow(mangoGroup, 1))
//     console.log(marginAccount.getUiDeposit(mangoGroup, 2), marginAccount.getUiBorrow(mangoGroup, 2))
//     console.log(marginAccount.getCollateralRatio(mangoGroup, prices))
//     // for (let i = 0; i < NUM_MARKETS; i++) {
//     //   let openOrdersAccount = marginAccount.openOrdersAccounts[i]
//     //   if (openOrdersAccount === undefined) {
//     //     continue
//     //   }
//     //
//     //   for (const oid of openOrdersAccount.orders) {
//     //     console.log(oid.toString())
//     //   }
//     //   console.log(i,
//     //     nativeToUi(openOrdersAccount.quoteTokenTotal.toNumber(), mangoGroup.mintDecimals[NUM_MARKETS]),
//     //     nativeToUi(openOrdersAccount.quoteTokenFree.toNumber(), mangoGroup.mintDecimals[NUM_MARKETS]),
//     //
//     //     nativeToUi(openOrdersAccount.baseTokenTotal.toNumber(), mangoGroup.mintDecimals[i]),
//     //     nativeToUi(openOrdersAccount.baseTokenFree.toNumber(), mangoGroup.mintDecimals[i])
//     //
//     //   )
//     // }
//
//   }
//   await getMarginAccountDetails()
//   // await testSolink()
//   // testDepositSrm()
// }
//
// tests()