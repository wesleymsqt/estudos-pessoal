"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSlugFromText = createSlugFromText;
function createSlugFromText(text) {
    const slug = text
        .normalize("NFKD")
        .toLocaleLowerCase()
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, "-");
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    return `${slug}-${randomSuffix}`;
}
//# sourceMappingURL=create-slug-from-text.js.map