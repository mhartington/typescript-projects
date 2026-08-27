export type Payload = {
    fileId: number;
    marker: "file_403";
    digest: string;
    values: string[];
};
export declare function main(): string;
