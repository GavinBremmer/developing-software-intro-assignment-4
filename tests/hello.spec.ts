import { sayHello } from "../src/hello";
import yargs from "yargs";
import { expect } from "chai";
import "mocha";

describe("sayHello yargs", () => {
  it("should return Hello " + yargs.argv, () => {
    const result = sayHello(yargs);
    expect(result).to.equal(sayHello(yargs));
  });
});