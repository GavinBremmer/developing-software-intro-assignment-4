import yargs = require('yargs');

yargs.command(

    'say-hello',

    "Say hello to a name of your choosing",

    {

        name: {
            type: 'string',
            alias: 'n',
            description: 'The name that we wish to say hello to'
        }

    },

    function( args ){
        console.log("Hello",args.name)
        
       
    }
);

yargs.help();

yargs.parse();