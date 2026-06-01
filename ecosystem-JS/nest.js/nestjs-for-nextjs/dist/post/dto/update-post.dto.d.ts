import { CreatePostDto } from "./create-post.dto";
declare const UpdatePostDto_base: import("@nestjs/mapped-types").MappedType<Partial<Pick<CreatePostDto, "title" | "content" | "excerpt" | "coverImageUrl">>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
    published?: boolean;
}
export {};
