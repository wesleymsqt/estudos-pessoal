import { UploadedFileType } from "./types/uploaded-file.type";
export declare class UploadService {
    handleUpload(file: UploadedFileType): Promise<{
        url: string;
    }>;
}
