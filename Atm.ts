#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
import showBanner from "node-banner";

(async () => {
    await showBanner('ATM', 'Habib Bank ATM ',"red");
   
})();


setTimeout(() => { 


(
    async () => {
     
        const usersInput: { userId: string, userPin: string } = await inquirer.prompt([
            {
                name: "userId",
                message: "Enter your user Id",
                type: "input"
            },
            {
                name: "userPin",
                message: "Enter your Pin number",
                type: "password"
            },

        ])

        const userData = {
            userId: usersInput.userId,
            userPin: usersInput.userPin,
            amount: Math.floor(Math.random() * 100000 + 1)
        }

        const selectedOpt: { accountType: "Current" | "Saving", Options: "Fast Cash" | "Amount" } = await inquirer.prompt([
            {
                type: "list",
                name: "accountType",
                choices: ["Current", "Saving"],
                message: "Select Your Account Type: ",
            },
            {
                name: "Options",
                type: "list",
                choices: ["Fast Cash", "Amount"],
                message: "Select your transaction ",
            },

        ])
        if (selectedOpt.Options === "Amount") {
            console.log("Your current Amount: ", userData.amount);
            const enteramount: { amount: number } = await inquirer.prompt([
                {
                    message: "Enter the amount",
                    name: "amount",
                    type: "number",
                    validate: (input) => {
                        if (input > userData.amount) {
                            return chalk.red("Insufficent Balance")
                        } else {
                            return true
                        }
                    }
                }
            ])
            userData.amount -= enteramount.amount
            console.log(chalk.blackBright("Remaining Balance ", userData.amount));
        }
        else if (selectedOpt.Options == "Fast Cash") {
            console.log("Your current Amount: ", userData.amount);
            const Selectamount: { amount1: number } = await inquirer.prompt([
                {
                    type: "list",
                    name: "amount1",
                    choices: [500, 1000, 5000, 10000, 20000],
                    message: "Select your Amount: "
                }
            ])
            if (userData.amount > Selectamount.amount1) {
                userData.amount -= Selectamount.amount1
                console.log(chalk.blueBright("Remaining Balance ", userData.amount));
            }
            else {
                console.log(chalk.red("Insufficent Balance"));
            }
        }
    }
)()
},1000)


