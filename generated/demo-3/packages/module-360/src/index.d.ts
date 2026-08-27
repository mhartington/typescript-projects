export type Payload = {
    fileId: number;
    marker: "file_360";
    digest: string;
    values: string[];
};
export declare function main(): string;
