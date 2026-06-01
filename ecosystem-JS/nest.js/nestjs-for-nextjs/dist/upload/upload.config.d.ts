import { UploadedFileType } from "./types/uploaded-file.type";
export declare const storage: any;
export declare const fileFilter: (req: any, file: UploadedFileType, cb: (error: Error | null, acceptFile: boolean) => void) => void;
export declare const limits: {};
