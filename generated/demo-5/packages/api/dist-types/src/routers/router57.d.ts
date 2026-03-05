export declare const router57: import("@trpc/server").TRPCBuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server").TRPCDefaultErrorShape;
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    proc0: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            route: 57;
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
            variant: "v_57_0";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_1";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_2";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_3";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_4";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_5";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_6";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_7";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_8";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_9";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_10";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_11";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_12";
        };
        output: {
            route: 57;
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
            route: 57;
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
            variant: "v_57_13";
        };
        output: {
            route: 57;
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
//# sourceMappingURL=router57.d.ts.map