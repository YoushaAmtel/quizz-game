import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.blue('Welcome to my TypeScript quiz:'));
console.log(chalk.yellow('You are required to gain a maximum of 5 points to win:'));
let points = 0;
const questions = [
    {
        name: "one",
        message: "TypeScript is a superset of:",
        type: "list",
        choices: ["Python", "CSS", "JavaScript"],
        answer: "JavaScript"
    },
    {
        name: "two",
        message: "Which company developed TypeScript?",
        type: "list",
        choices: ["Google", "Microsoft", "Facebook"],
        answer: "Microsoft"
    },
    {
        name: "three",
        message: "What is the file extension for TypeScript files?",
        type: "list",
        choices: [".js", ".ts", ".tsx"],
        answer: ".ts"
    },
    {
        name: "four",
        message: "TypeScript supports static typing: (true/false)",
        type: "list",
        choices: ["true", "false"],
        answer: "true"
    },
    {
        name: "five",
        message: "Which of the following is not a TypeScript data type?",
        type: "list",
        choices: ["string", "boolean", "character"],
        answer: "character"
    },
    {
        name: "six",
        message: "Can TypeScript code be executed directly by the browser?",
        type: "list",
        choices: ["yes", "no"],
        answer: "no"
    },
    {
        name: "seven",
        message: "Which of these is a TypeScript feature?",
        type: "list",
        choices: ["Type inference", "Type casting", "Type mutation"],
        answer: "Type inference"
    },
    {
        name: "eight",
        message: "TypeScript can be used with which JavaScript frameworks?",
        type: "list",
        choices: ["React", "Angular", "Both"],
        answer: "Both"
    },
    {
        name: "nine",
        message: "Which of the following is the correct way to define a variable in TypeScript?",
        type: "list",
        choices: ["var x: number = 10;", "let x: number = 10;", "int x = 10;"],
        answer: "let x: number = 10;"
    },
    {
        name: "ten",
        message: "Which command is used to compile TypeScript files?",
        type: "list",
        choices: ["tsc", "tsrun", "tscompile"],
        answer: "tsc"
    },
    {
        name: "eleven",
        message: "Which of the following is a feature of TypeScript interfaces?",
        type: "list",
        choices: ["They provide a way to define the shape of an object.", "They enforce runtime type checks.", "They are used to define CSS styles."],
        answer: "They provide a way to define the shape of an object."
    }
];
for (let i = 0; i < questions.length; i++) {
    let answer = await inquirer.prompt([{
            name: questions[i].name,
            message: questions[i].message,
            type: questions[i].type,
            choices: questions[i].choices
        }]);
    if (answer[questions[i].name] === questions[i].answer) {
        console.log(chalk.green('Your answer is correct!'));
        points++;
    }
    else {
        console.log(chalk.red('Your answer is incorrect.'));
    }
    console.log(chalk.cyan(`Current points: ${points}`));
    console.log();
}
if (points >= 5) {
    console.log(chalk.green.bold('Congratulations! You won the quiz.'));
}
else {
    console.log(chalk.red.bold('You did not win. Better luck next time!'));
}
