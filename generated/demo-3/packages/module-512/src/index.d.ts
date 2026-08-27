export type Payload = {
    fileId: number;
    marker: "file_512";
    digest: string;
    values: string[];
};
export declare function main(): string;
