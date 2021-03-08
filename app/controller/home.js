"use strict";
const { Controller } = require("egg");

class HomeController extends Controller {
  index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
}

module.exports = HomeController;
