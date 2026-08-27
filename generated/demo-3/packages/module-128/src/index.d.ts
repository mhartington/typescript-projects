export type Payload = {
    fileId: number;
    marker: "file_128";
    digest: string;
    values: string[];
};
export declare function main(): string;
