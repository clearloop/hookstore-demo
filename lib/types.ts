import { Hook } from "./hookPerm";

export interface IHook extends Hook {}

export interface IDeployContext {
    currency0: string;
    currency1: string;
    feeTier: number;
    tickSpacing: number;
    hooks: Hook[];
    addHook: (hook: IHook) => void;
    removeHook: (hook: IHook) => void;
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
