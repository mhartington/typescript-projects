export type Payload = {
    fileId: number;
    marker: "file_644";
    digest: string;
    values: string[];
};
export declare function main(): string;
