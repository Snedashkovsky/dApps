import { FeeTable } from "@cosmjs/cosmwasm";
import { Coin } from "@cosmjs/launchpad";
import { Decimal } from "@cosmjs/math";
import { AppConfig } from "../config";

// NARROW NO-BREAK SPACE (U+202F)
const thinSpace = "\u202F";

function printableCoin(coin?: Coin): string {
  if (!coin) {
    return "0";
  }
  if (coin.denom.startsWith("u")) {
    const ticker = coin.denom.slice(1).toUpperCase();
    return Decimal.fromAtomics(coin.amount, 6).toString() + thinSpace + ticker;
  } else {
    return coin.amount + thinSpace + coin.denom;
  }
}

function printableBalance(balance?: readonly Coin[]): string {
  if (!balance || balance.length === 0) return "–";
  return balance.map(printableCoin).join(", ");
}

function buildFeeTable({ feeToken, gasPrice }: AppConfig): FeeTable {
  const stdFee = (gas: number, denom: string, price: number) => {
    const amount = Math.floor(gas * price);
    return {
      amount: [{ amount: amount.toString(), denom: denom }],
      gas: gas.toString(),
    };
  };

  return {
    upload: stdFee(1500000, feeToken, gasPrice),
    init: stdFee(600000, feeToken, gasPrice),
    exec: stdFee(200000, feeToken, gasPrice),
    migrate: stdFee(600000, feeToken, gasPrice),
    send: stdFee(80000, feeToken, gasPrice),
    changeAdmin: stdFee(80000, feeToken, gasPrice),
  };
}

interface MappedCoin {
  readonly denom: string;
  readonly fractionalDigits: number;
}

interface CoinMap {
  readonly [key: string]: MappedCoin;
}

function nativeCoinToDisplay(coin: Coin, coinMap: CoinMap): Coin {
  if (!coinMap) return coin;

  const coinToDisplay = coinMap[coin.denom];
  if (!coinToDisplay) return coin;

  const amountToDisplay = Decimal.fromAtomics(coin.amount, coinToDisplay.fractionalDigits).toString();

  return { denom: coinToDisplay.denom, amount: amountToDisplay };
}

// display amount is eg "12.0346", return is in native tokens
// with 6 fractional digits, this would be eg. "12034600"
function displayAmountToNative(amountToDisplay: string, coinMap: CoinMap, nativeDenom: string): string {
  const fractionalDigits = coinMap[nativeDenom]?.fractionalDigits;
  if (fractionalDigits) {
    // use https://github.com/CosmWasm/cosmjs/blob/v0.22.2/packages/math/src/decimal.ts
    const decimalAmount = Decimal.fromUserInput(amountToDisplay, fractionalDigits);
    return decimalAmount.atomics;
  }

  return amountToDisplay;
}

export {
  printableCoin,
  printableBalance,
  buildFeeTable,
  MappedCoin,
  CoinMap,
  nativeCoinToDisplay,
  displayAmountToNative,
};