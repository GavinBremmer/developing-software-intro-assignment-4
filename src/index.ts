import yargs = require("yargs");
import { sayHello } from "./hello";

sayHello(yargs);

yargs.help();

yargs.parse();
