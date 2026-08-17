import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as gridClassicDefaultConfig } from "./GridClassic/config";
import { GridClassicStrategyDefinition } from "./GridClassic/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [
  GridClassicStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  GridClassic: gridClassicDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { GridClassicStrategyDefinition } from "./GridClassic/strategy";
export { gridClassicDefaultConfig };
export { gridClassicManifest } from "./GridClassic/manifest";
export { gridClassicAiAdapter } from "./GridClassic/adapters/ai";

export default defineStrategyPlugin({ strategyEntries });
