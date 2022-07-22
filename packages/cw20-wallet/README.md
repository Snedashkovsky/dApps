# Bostrom CW20 Wallet

## Prerequisites

In the root directory, run:

```shell
yarn
yarn build-deps
```

## Run the app

In the packages/cw20-wallet directory, run:

```shell
yarn start
```
## Build app
```shell
yarn build
```
## Upload to IPFS
by [ipfs-deploy](https://github.com/ipfs-shipyard/ipfs-deploy)

```shell
ipd build
```

or by IPFS node

```shell
ipfs pin add -r build
```