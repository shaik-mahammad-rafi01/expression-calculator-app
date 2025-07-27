## Math Expression Calculator
### Description

This is a simple calculator built with Typescript that evaluates mathematical expressions using mathjs library.It takes a math expression as a string and returns the calculated result.

### Table of Contents
- [Description](#description)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Author](#author)


### Features
- Basic Math Operation
    - Addition
    - Subtraction
    - Multiplication
    - Division
    - Modulus
    - Power
- Scientific Operations
    - Square Root(sqrt)
    - Factorial(!)
- Expression Evaluation
    - Evaluate math expression from string
    - Handle invalid input with clear error message
### Tech Stack

- TypeScript download and installation guide - visit : https://www.typescriptlang.org/download/

- **Jest** for unit testing
    - Download and installation Guide  - https://jestjs.io/

##  Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:shaik-mahammad-rafi01/expression-calculator-app.git
cd expression-calculator-app
```

### 2. Install Dependencies 

  #### Install Node.js using NVM (Node Version Manager)
  - In Terminal, run this command to install NVM
  ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
  ```
##### Install Node.js Using NVM
- With NVM installed, you can now install Node.js. To install the latest LTS (Long Term Support) version, run:
```
nvm install --lts 
```
##### Verify the installation : 
- Once installed, you can check the Node.js version using:
```
node -v
```

#### Install TypeScript 
- Install TypeScript Globally
  - Open your terminal and run the following command to install TypeScript globally:

  ```
  npm install -g typescript
  ```
- Verify that TypeScript is installed by checking its version:
  ```
     tsc -v
  ```


### 3. Run the Project 
- Compile the Typescript files 
```bash 
  tsc 
```
- Run the compiled JavaScript
```
npm start
```

## Testing
This project uses Jest for unit testing.

### Install Jest with TypeScript Support 
```
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```
### Run tests 
```
npx jest
```
### Run test with coverage report 
```
npx jest --coverage
```

## Author
Shaik Mahammad Rafi  
📧 [rafi.shaik@everest.engineering](mailto:rafi.shaik@everest.engineering)  