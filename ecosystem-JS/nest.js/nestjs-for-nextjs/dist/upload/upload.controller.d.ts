import { UploadService } from "./upload.service";
import { UploadedFileType } from "./types/uploaded-file.type";
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadFile(file: UploadedFileType): Promise<{
        url: string;
    }>;
}
