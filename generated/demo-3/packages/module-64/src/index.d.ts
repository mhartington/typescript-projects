export type Payload = {
    fileId: number;
    marker: "file_64";
    digest: string;
    values: string[];
};
export declare function main(): string;
