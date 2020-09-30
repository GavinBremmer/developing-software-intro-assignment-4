# Generic Typescript Package

This is a generic typescript project with a simple yargs function.

This project contains the following packages:

- Typescript Compiler
    - tsconfig.json

- Git Repository
    - .gitignore

- ESLint (Linting)
    - .eslintrc
    - .eslintignore

- Prettier (Code Formatting)
    - .prettierrc.json
    - .prettierignore

- Mocha and Chai

- nyc
    - nycrc.json

- Yargs

## Installation Instructions

To install this package please run:

``` 
npm install 
```

## Yargs Function
To use the yargs function:
```
npm run start:dev -- -- say-hello --name [desired name, without braces]
```
Example:
```
npm run start:dev -- -- say-hello --name Antonio
```

## Start Scripts

This project has the following scripts:

To compile the program:
```
npm run build:compile
```
To run the program:
```
npm run start
```
To compile and run the program:
```
npm run start:dev
```
To run the linter:
```
npm run lint
```
To run the code formatter:
```
npm run prettier
```
To run the code tester:
```
npm run test
```
To run the code tester with coverage report:
```
npm run test:coverage
```
To lint, format, test, compile and run the program:
```
npm run start:all
```