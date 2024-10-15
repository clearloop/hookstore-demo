export interface IHook {
    name: string;
    desc: string;
    author: string;
    category: string;
    access: string[];
}

export interface IDeployContext {
    currency0: string;
    currency1: string;
    feeTier: number;
    tickSpacing: number;
    hooks: IHook[];
    addHook: (hook: IHook) => void;
    removeHook: (hook: IHook) => void;
}
