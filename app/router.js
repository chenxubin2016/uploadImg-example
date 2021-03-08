"use strict";

module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.post("/uploadImg", controller.upload.uploadImg);
};
