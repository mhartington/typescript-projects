export declare const router63: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    proc0: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_0";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc1: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_1";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc2: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_2";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc3: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_3";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc4: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_4";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc5: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_5";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc6: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_6";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc7: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_7";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc8: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_8";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc9: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_9";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc10: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_10";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc11: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_11";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc12: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_12";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
    proc13: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_63_13";
        };
        output: {
            route: 63;
            search: string;
            filters: {
                active: boolean;
                level: "high" | "low" | "mid";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            data: {
                count: number;
                preview: {
                    id: string;
                    score: number;
                }[];
            };
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=router63.d.ts.map