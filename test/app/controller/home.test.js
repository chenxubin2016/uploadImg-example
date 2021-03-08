"use strict";

const { app, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/home.test.js",function(){
  it("should assert", function(){
    const pkg = require("../../../package.json");
    return assert(app.config.keys.startsWith(pkg.name));
  });

  it("should GET /",function(){
    app.httpRequest()
      .get("/")
      .expect("hi, egg")
      .expect(200);
  });
});
