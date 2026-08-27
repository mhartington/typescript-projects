export type Payload = {
    fileId: number;
    marker: "file_80";
    digest: string;
    values: string[];
};
export declare function main(): string;
