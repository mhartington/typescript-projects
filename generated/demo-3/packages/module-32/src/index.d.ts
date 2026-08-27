export type Payload = {
    fileId: number;
    marker: "file_32";
    digest: string;
    values: string[];
};
export declare function main(): string;
