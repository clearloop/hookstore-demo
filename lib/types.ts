import { Hook } from "./hookPerm";

export interface IDeployContext {
    currency0: string;
    currency1: string;
    feeTier: number;
    tickSpacing: number;
    hooks: Hook[];
    addHook: (hook: Hook) => void;
    removeHook: (hook: Hook) => void;
}

export interface IHookPermission {
    beforeInitialize: boolean;
    afterInitialize: boolean;
    beforeAddLiquidity: boolean;
    afterAddLiquidity: boolean;
    beforeRemoveLiquidity: boolean;
    afterRemoveLiquidity: boolean;
    beforeSwap: boolean;
    afterSwap: boolean;
    beforeDonate: boolean;
    afterDonate: boolean;
    beforeSwapReturnDelta: boolean;
    afterSwapReturnDelta: boolean;
    afterAddliquidityReturnDelta: boolean;
    afterRemoveLiquidityReturnDelta: boolean;
}
