"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PostService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./entities/post.entity");
const typeorm_2 = require("@nestjs/typeorm");
const create_slug_from_text_1 = require("../common/utils/create-slug-from-text");
let PostService = PostService_1 = class PostService {
    postRepository;
    logger = new common_1.Logger(PostService_1.name);
    constructor(postRepository) {
        this.postRepository = postRepository;
    }
    async findOneOrFail(postData) {
        const post = await this.findOne(postData);
        if (!post) {
            throw new common_1.NotFoundException("Post não encontrado");
        }
        return post;
    }
    async findOne(postData) {
        const post = await this.postRepository.findOne({
            where: postData,
            relations: ["author"],
        });
        return post;
    }
    async findAll(postData) {
        const posts = await this.postRepository.find({
            where: postData,
            order: {
                createdAt: "DESC",
            },
            relations: ["author"],
        });
        return posts;
    }
    async findOneOwnedOrFail(postData, author) {
        const post = await this.findOneOwned(postData, author);
        if (!post) {
            throw new common_1.NotFoundException("Post não encontrado");
        }
        return post;
    }
    async findOneOwned(postData, author) {
        const post = await this.postRepository.findOne({
            where: {
                ...postData,
                author: { id: author.id },
            },
            relations: ["author"],
        });
        return post;
    }
    async findAllOwned(author) {
        const posts = await this.postRepository.find({
            where: {
                author: { id: author.id },
            },
            order: {
                createdAt: "DESC",
            },
            relations: ["author"],
        });
        return posts;
    }
    async create(dto, author) {
        const post = this.postRepository.create({
            slug: (0, create_slug_from_text_1.createSlugFromText)(dto.title),
            author,
            content: dto.content,
            excerpt: dto.excerpt,
            coverImageUrl: dto.coverImageUrl,
            title: dto.title,
        });
        const created = await this.postRepository
            .save(post)
            .catch((err) => {
            if (err instanceof Error) {
                this.logger.error("Erro ao criar post", err.stack);
            }
            throw new common_1.BadRequestException("Erro ao criar o post");
        });
        return created;
    }
    async update(postData, dto, author) {
        if (Object.keys(dto).length === 0) {
            throw new common_1.BadRequestException("Dados não enviados");
        }
        const post = await this.findOneOwnedOrFail(postData, author);
        post.title = dto.title ?? post.title;
        post.content = dto.content ?? post.content;
        post.excerpt = dto.excerpt ?? post.excerpt;
        post.coverImageUrl = dto.coverImageUrl ?? post.coverImageUrl;
        post.published = dto.published ?? post.published;
        return this.postRepository.save(post);
    }
    async remove(postData, author) {
        const post = await this.findOneOrFail(postData);
        await this.postRepository.delete({
            ...postData,
            author: { id: author.id },
        });
        return post;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = PostService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(post_entity_1.Post)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PostService);
//# sourceMappingURL=post.service.js.map