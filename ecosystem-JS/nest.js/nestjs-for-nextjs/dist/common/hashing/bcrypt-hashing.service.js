"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptHashingService = void 0;
const hashing_service_1 = require("./hashing.service");
const bcrypt = require("bcryptjs");
class BcryptHashingService extends hashing_service_1.HashingService {
    async hash(password) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    async compare(password, hash) {
        const isValid = await bcrypt.compare(password, hash);
        return isValid;
    }
}
exports.BcryptHashingService = BcryptHashingService;
//# sourceMappingURL=bcrypt-hashing.service.js.map