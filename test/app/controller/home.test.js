"use strict";

const { app, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/home.test.js", () => {
  it("should assert", () => {
    const pkg = require("../../../package.json");
    return assert(app.config.keys.startsWith(pkg.name));
  });

  it("should GET /", () => {
    return app.httpRequest()
      .get("/")
      .expect("hi, egg")
      .expect(200);
  });
  return;
});
