import { ConfigService } from "@nestjs/config";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { AuthenticatedRequest } from "src/auth/types/authenticated-request";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdatePasswordDto } from "./dto/update-password.dto";
declare class UserResponseDto {
    constructor(user: unknown);
}
export declare class UserController {
    private readonly configService;
    private readonly userService;
    constructor(configService: ConfigService, userService: UserService);
    findOne(req: AuthenticatedRequest): Promise<UserResponseDto>;
    create(dto: CreateUserDto): Promise<UserResponseDto>;
    update(req: AuthenticatedRequest, dto: UpdateUserDto): Promise<UserResponseDto>;
    updatePassword(req: AuthenticatedRequest, dto: UpdatePasswordDto): Promise<UserResponseDto>;
    remove(req: AuthenticatedRequest): Promise<UserResponseDto>;
}
export {};
