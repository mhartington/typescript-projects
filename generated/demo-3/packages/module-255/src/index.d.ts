export type Payload = {
    fileId: number;
    marker: "file_255";
    digest: string;
    values: string[];
};
export declare function main(): string;
