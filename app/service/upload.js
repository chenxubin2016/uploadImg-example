"use strict";
const { Service } = require("egg");
const fs = require("fs");
const path = require("path");
const pump = require("mz-modules/pump");

class UserService extends Service {
  // 上传图片
  async uploadImg() {
    // 添加用户信息
    const { ctx } = this;
    const parts = ctx.multipart({ autoFields: true });
    const urls = [];
    const stream = await parts();
    if (stream) {
      const fileType = stream.mimeType.split("/")[ 1 ];
      const filename = `${Date.now()}.${fileType}` || stream.filename.toLowerCase();
      await ctx.helper.checkDir("app/public/temporary");
      const target = path.join(this.config.baseDir, "app/public/temporary", filename);
      urls.push(`/public/temporary/${filename}`);
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
    }
    // console.log(urls);
    return ctx.helper.success({
      ctx,
      res: urls
    });
  }
}

module.exports = UserService;
