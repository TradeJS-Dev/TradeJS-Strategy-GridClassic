import { createStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, type GridClassicConfig } from "./config";
import { createGridClassicCore } from "./core";
import { gridClassicManifest } from "./manifest";

export const GridClassicStrategyDefinition: ValidatedStrategyRegistryEntry<GridClassicConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createStrategyConfigParser({
      strategyName: "GridClassic",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createGridClassicCore,
    manifest: gridClassicManifest,
  };
