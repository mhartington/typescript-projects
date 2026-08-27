export type Payload = {
    fileId: number;
    marker: "file_500";
    digest: string;
    values: string[];
};
export declare function main(): string;
