export type Payload = {
    fileId: number;
    marker: "file_404";
    digest: string;
    values: string[];
};
export declare function main(): string;
