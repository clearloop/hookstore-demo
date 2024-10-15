import { HookPermisson } from "./hookPerm";
import { IHook } from "./types";

export const HOOKS: IHook[] = [
    {
        name: "Full Range",
        desc: "A hook that allows a Uniswap pool to provide liquidity for a range of prices. This can be used to create a mark...",
        author: "Uniswap Labs",
        category: "",
        perms: [
            HookPermisson.BeforeInitialize,
            HookPermisson.BeforeAddLiquidity,
            HookPermisson.BeforeSwap,
        ],
    },
    {
        name: "Geomeaon Oracle",
        desc: "A unique hook making a Uniswap pool function as an oracle. The geomean price is calculated using the prices of ...",
        author: "Uniswap Labs",
        category: "",
        perms: [
            HookPermisson.BeforeInitialize,
            HookPermisson.AfterInitialize,
            HookPermisson.BeforeAddLiquidity,
            HookPermisson.BeforeRemoveLiquidity,
            HookPermisson.BeforeSwap,
        ],
    },
    {
        name: "Limit Order",
        desc: "A limit order is an order to buy or sell a token with a restriction on the maximum price to be paid or the minimum price to be received...",
        author: "Uniswap Labs",
        category: "",
        perms: [HookPermisson.AfterInitialize, HookPermisson.AfterSwap],
    },
    {
        name: "TWAMM",
        desc: "A TWAMM (Time Weighted Average Market Maker) is a type of market maker that uses time-weighted averages to cal...",
        author: "Uniswap Labs",
        category: "",
        perms: [
            HookPermisson.BeforeInitialize,
            HookPermisson.BeforeAddLiquidity,
            HookPermisson.BeforeSwap,
        ],
    },
    {
        name: "Volatility Oracle",
        desc: "A volatility oracle is a contract that provides information about the volatility of an asset. This information can...",
        author: "Uniswap Labs",
        category: "",
        perms: [HookPermisson.BeforeInitialize, HookPermisson.AfterInitialize],
    },
];
