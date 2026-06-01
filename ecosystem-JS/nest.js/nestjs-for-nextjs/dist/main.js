"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
const parse_cors_whitelist_1 = require("./common/utils/parse-cors-whitelist");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use((0, helmet_1.default)({
        crossOriginResourcePolicy: { policy: "cross-origin" },
    }));
    const corsWhiteList = (0, parse_cors_whitelist_1.parseCorsWhitelist)(process.env.CORS_WHITELIST ?? "");
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin || corsWhiteList.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("Not allowed by CORS"), false);
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    await app.listen(process.env.APP_PORT ?? 3001);
}
void bootstrap();
//# sourceMappingURL=main.js.map