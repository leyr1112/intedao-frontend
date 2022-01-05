export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/inte-subgraph";
export const EPOCH_INTERVAL = 9600;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 3;

export const TOKEN_DECIMALS = 9;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  56: {
    USDT_ADDRESS: "0x55d398326f99059ff775485246999027b3197955", // duplicate
    USDC_ADDRESS: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    INTE_ADDRESS: "0x6957699E2Be00C2a8e653815984dc8a4d8c24354",
    STAKING_ADDRESS: "0xbd524A311440034bd9a5E856A4E5Ca13eDf54644", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xeae4137eDbEC599a820464AF3ECB034E91f1aeFc", // Helper contract used for Staking only
    SINTE_ADDRESS: "0x334275B0e9C580875EBE5FA0B570F98033AC7E54",
    DISTRIBUTOR_ADDRESS: "0x92B17fd1C54c2D4c3cCE60d1468F0C1b06b245eB",
    BONDINGCALC_ADDRESS: "0x3476FA1fffa92F78ef883886eE38a03723CAcF32",
    TREASURY_ADDRESS: "0x4515C7bB0789CebEDCB96D31B831337B7BE0f540",
    REDEEM_HELPER_ADDRESS: "0x16605CA96c949f27f767435157a43942a1F18c8c",
  },
};