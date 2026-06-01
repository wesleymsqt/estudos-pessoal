"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
class JwtAuthGuard extends (0, passport_1.AuthGuard)("jwt") {
    handleRequest(err, user, info, context, status) {
        if (!user || info instanceof jwt_1.JsonWebTokenError) {
            throw new common_1.UnauthorizedException("Você precisa fazer login");
        }
        return super.handleRequest(err, user, info, context, status);
    }
}
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map