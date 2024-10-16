import { HOOK_PERMISSIONS } from "./constants";

export enum HookPermisson {
    BeforeInitialize,
    AfterInitialize,
    BeforeAddLiquidity,
    AfterAddLiquidity,
    BeforeRemoveLiquidity,
    AfterRemoveLiquidity,
    BeforeSwap,
    AfterSwap,
    BeforeDonate,
    AfterDonate,
    BeforeSwapReturnDelta,
    AfterSwapReturnDelta,
    AfterAddliquidityReturnDelta,
    AfterRemoveLiquidityReturnDelta,
}

export class Hook {
    public name: string;
    public desc: string;
    public author: string;
    public category: string;
    public perms: HookPermisson[];

    constructor(
        name: string,
        desc: string,
        author: string,
        category: string,
        perms: number[]
    ) {
        this.name = name;
        this.desc = desc;
        this.author = author;
        this.category = category;
        this.perms = perms;
    }

    static allPermissions(): HookPermisson[] {
        return Array.from(Array(HOOK_PERMISSIONS.length).keys());
    }

    public hasAccess(perm: HookPermisson): boolean {
        return this.perms.includes(perm);
    }
}
