export type Payload = {
    fileId: number;
    marker: "file_200";
    digest: string;
    values: string[];
};
export declare function main(): string;
