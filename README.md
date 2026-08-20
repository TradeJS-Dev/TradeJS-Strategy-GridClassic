# @tradejs/strategy-grid-classic

TradeJS strategy plugin providing `GridClassic`.

## Strategy overview

`GridClassic` models horizontal ranges from alternating pivots. Its default
mode fades confirmed edge rejections with managed scale-ins and center or
opposite-edge targets; an optional continuation mode trades accepted breakouts
and retests outside the range.

## Logic at a glance

![GridClassic strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-GridClassic/main/docs/strategy-logic.svg)

## Signal on an example chart

The default mean-reversion mode is shown: alternating pivots define the range, then a confirmed lower-edge rejection targets the center or far edge.

![GridClassic signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-GridClassic/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

## Install

```bash
yarn add @tradejs/strategy-grid-classic
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-grid-classic"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the production-like Project
image passes. The current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.
