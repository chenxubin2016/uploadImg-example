/* eslint valid-jsdoc: "off" */
"use strict";
const path = require("path");
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1614150210196_6791`;

  // add your middleware config here
  config.middleware = [];
  // 静态目录配置
  config.static = {
    prefix: "/public",
    dir: path.join(appInfo.baseDir, "app/public"),
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
    maxFiles: 1000
  };
  // 跨域设置
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: [ "*" ]
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS"
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
