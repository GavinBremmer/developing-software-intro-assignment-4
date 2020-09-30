import { Arguments, Argv } from "yargs";

export function sayHello(yargs: Argv) {
  yargs.command(
    "say-hello",

    "Say hello to a name of your choosing",

    {
      name: {
        type: "string",
        alias: "n",
        description: "The name that we wish to say hello to",
      },
    },

    function (args: Arguments<{ name: string; n: string }>) {
      console.log("Hello", args.name);
    }
  );
}
