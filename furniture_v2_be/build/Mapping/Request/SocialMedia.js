"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaRequest = void 0;
class SocialMediaRequest {
    //
    constructor(data) {
        this.setData(data);
    }
    setData(data) {
        this.name = data.name || "";
        this.code = data.code || "";
        this.thumb = data.thumb || "";
        this.created_at = data.created_at || Date.now();
        this.updated_at = data.updated_at || null;
    }
}
exports.SocialMediaRequest = SocialMediaRequest;
