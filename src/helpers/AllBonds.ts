import { StableBond, LPBond, NetworkID, CustomBond, BondType } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as InteDaiimg } from "src/assets/tokens/INTE-DAI.svg";
import { ReactComponent as wFTMImg } from "src/assets/tokens/wFTM.svg";
import { ReactComponent as UsdcImg } from "src/assets/tokens/USDC.svg";
import { ReactComponent as MimImg } from "src/assets/tokens/MIM.svg";
import { ReactComponent as InteUsdcImg } from "src/assets/tokens/INTE-USDC.svg";

import { abi as BondInteDaiContract } from "src/abi/bonds/InteDaiContract.json";
import { abi as InteUsdcContract } from "src/abi/bonds/InteUsdcContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as MimBondContract } from "src/abi/bonds/MimContract.json";
import { abi as ReserveInteDaiContract } from "src/abi/reserves/InteDai.json";
import { abi as ReserveInteUsdcContract } from "src/abi/reserves/InteUsdc.json";

import { abi as EthBondContract } from "src/abi/bonds/FtmContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const usdt = new StableBond({
  name: "usdt",
  displayName: "USDT",
  bondToken: "USDT",
  bondIconSvg: DaiImg,
  bondContractABI: DaiBondContract,
  // fourAddress: "0xe8fd4630800bA4335801D1b104B07328Ae415605",
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xa5511B0FE17e8De9c6e0386a5105Eae015FAAd23",
      reserveAddress: "0x55d398326f99059ff775485246999027b3197955",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
  },
});

// export const ftm = new CustomBond({
//   name: "ftm",
//   displayName: "wFTM",
//   lpUrl: "",
//   bondType: BondType.StableAsset,
//   bondToken: "WFTM",
//   bondIconSvg: wFTMImg,
//   bondContractABI: EthBondContract,
//   reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x72De9F0e51cA520379a341318870836FdCaf03B9",
//       reserveAddress: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
//       reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
//     },
//   },
//   customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
//     const ethBondContract = this.getContractForBond(networkID, provider);
//     let ethPrice = await ethBondContract.assetPrice();
//     ethPrice = ethPrice / Math.pow(10, 8);
//     const token = this.getContractForReserve(networkID, provider);
//     let ftmAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
//     ftmAmount = ftmAmount / Math.pow(10, 18);
//     return ftmAmount * ethPrice;
//   },
// });

export const usdc = new StableBond({
  name: "usdc",
  displayName: "USDC",
  bondToken: "USDC",
  bondIconSvg: UsdcImg,
  // fourAddress: "0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6",
  bondContractABI: DaiBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x56f315072D574aa990b4BbaE79039CbC72Dea886",
      reserveAddress: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
      reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
    },
  },
});

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  bondIconSvg: MimImg,
  // fourAddress: "0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6",
  bondContractABI: MimBondContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x84bE8F76426049ed2faE4Ce40FC2f500a652Eb66",
      reserveAddress: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
      reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
    },
  },
});

// export const usdc4 = new StableBond({
//   name: "usdc4",
//   displayName: "USDC",
//   bondToken: "USDC",
//   bondIconSvg: UsdcImg,
//   bondContractABI: MimBondContract,
//   isFour: true,
//   decimals: 6,
//   isTotal: true,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x605c31dD24c71f0b732Ef33aC12CDce77fAC09B6",
//       reserveAddress: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
//       reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
//     },
//   },
// });

// export const mim4 = new StableBond({
//   name: "mim4",
//   displayName: "MIM",
//   bondToken: "MIM",
//   bondIconSvg: MimImg,
//   bondContractABI: DaiBondContract,
//   isFour: true,
//   fourAddress: "0xa695750b8439AB2AfBd88310946C99747C5B3A2E",
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0xb26be27f6f980efb07ae757d0a6a372671eacf7f",
//       reserveAddress: "0x82f0B8B456c1A451378467398982d4834b6829c1",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
//       reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
//     },
//   },
// });

// export const mim = new StableBond({
//   name: "mim",
//   displayName: "MIM",
//   bondToken: "MIM",
//   bondIconSvg: MimImg,
//   bondContractABI: MimBondContract,
//   isTotal: true,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x029D066b2669A862aC41B1cC84c558C72e21F9F8",
//       reserveAddress: "0x82f0B8B456c1A451378467398982d4834b6829c1",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
//       reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
//     },
//   },
// });
export const Inte_usdt = new LPBond({
  name: "Inte_usdt_lp",
  displayName: "INTE-USDT LP",
  bondToken: "USDT",
  bondIconSvg: InteDaiimg,
  bondContractABI: BondInteDaiContract,
  reserveContract: ReserveInteDaiContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x03dD8AE60A6C19c4D2b1dd6F52F4D1C4d2C5577F",
      reserveAddress: "0x182866CF6CAe755261FfFA7D45850ee51952Fd1C",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
});

// export const Inte_usdt_v2 = new LPBond({
//   name: "Inte_usdt_lp",
//   displayName: "INTE-DAI LP v2",
//   bondToken: "DAI",
//   bondIconSvg: InteDaiimg,
//   bondContractABI: BondInteDaiContract,
//   reserveContract: ReserveInteDaiContract,
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x6c9b3a47a28a39fea65e99d97895e717df1706d0",
//       reserveAddress: "0xbc0eecdA2d8141e3a26D2535C57cadcb1095bca9",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
//       reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
//     },
//   },
//   lpUrl:
//     "https://spookyswap.finance/add/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
// });

export const Inte_usdc = new LPBond({
  name: "Inte_usdc_lp",
  displayName: "INTE-USDC LP",
  bondToken: "USDC",
  bondIconSvg: InteUsdcImg,
  bondContractABI: InteUsdcContract,
  reserveContract: ReserveInteUsdcContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x56f315072D574aa990b4BbaE79039CbC72Dea886",
      reserveAddress: "0x4D43a49f2e87997bC73Bb97Be985Ac00CDfD7A31",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
});



export const Inte_busd = new LPBond({
  name: "Inte_busd_lp",
  displayName: "INTE-BUSD LP",
  bondToken: "BUSD",
  bondIconSvg: InteUsdcImg,
  bondContractABI: InteUsdcContract,
  reserveContract: ReserveInteUsdcContract,
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x653869B865A1016726eeAf6eabCC2B2163077419",
      reserveAddress: "0xdf2a97448ec909f8e95f3986d589f98c4616e498",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
  },
  lpUrl:
    "https://swap.spiritswap.finance/#/add/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75/0x5C4FDfc5233f935f20D2aDbA572F770c2E377Ab0",
});

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [ Inte_usdc,  busd, usdc,  usdt, Inte_usdt, Inte_busd];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
