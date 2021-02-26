"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // 跨域设置
  cors: {
    enable: true,
    package: "egg-cors"
  }
};
