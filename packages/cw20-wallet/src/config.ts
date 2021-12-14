import { AppConfig, getAppConfig, NetworkConfigs } from "@cosmicdapp/logic";

const local: AppConfig = {
  chainId: "testing",
  chainName: "Testing",
  addressPrefix: "wasm",
  rpcUrl: "http://localhost:26659",
  httpUrl: "http://localhost:1317",
  faucetUrl: "http://localhost:8000",
  feeToken: "ucosm",
  stakingToken: "uatom",
  coinMap: {
    ucosm: { denom: "COSM", fractionalDigits: 6 },
    uatom: { denom: "ATOM", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const uninet: AppConfig = {
  chainId: "uni",
  chainName: "Uni",
  addressPrefix: "juno",
  rpcUrl: "https://rpc.uni.juno.deuslabs.fi",
  httpUrl: "https://lcd.uni.juno.deuslabs.fi",
  faucetUrl: "https://faucet.uni.juno.deuslabs.fi",
  feeToken: "ujunox",
  stakingToken: "ujunox",
  coinMap: {
    ujunox: { denom: "JUNOX", fractionalDigits: 6 },
  },
  gasPrice: 0.025,
};

const spacepussy: AppConfig = {
  chainId: "space-pussy-1",
  chainName: "Space Pussy",
  addressPrefix: "bostrom",
  rpcUrl: "https://rpc.space-pussy-1.cybernode.ai",
  httpUrl: "https://lcd.space-pussy-1.cybernode.ai",
  faucetUrl: "http://faucet.space-pussy-1.cybernode.ai",
  feeToken: "boot",
  stakingToken: "boot",
  coinMap: {
    boot: { denom: "BOOT", fractionalDigits: 0 },
  },
  gasPrice: 0.01,
};

const configs: NetworkConfigs = { local, uninet, spacepussy };
export const config = getAppConfig(configs);
