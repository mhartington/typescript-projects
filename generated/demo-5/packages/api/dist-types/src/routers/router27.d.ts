export declare const router27: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    proc0: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_0";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_1";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_2";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_3";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_4";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_5";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_6";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_7";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_8";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_9";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_10";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_11";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_12";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
                tags: string[];
            };
            cursor: {
                page: number;
                size: number;
            };
            variant: "v_27_13";
        };
        output: {
            route: 27;
            search: string;
            filters: {
                active: boolean;
                level: "low" | "mid" | "high";
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
//# sourceMappingURL=router27.d.ts.map