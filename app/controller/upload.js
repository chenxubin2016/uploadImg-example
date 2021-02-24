'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async uploadImg(){
    const { ctx } = this;
    ctx.body = await ctx.service.upload.uploadImg();
  }
}

module.exports = HomeController;
