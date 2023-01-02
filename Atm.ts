import inquirer from "inquirer";

const answers = await inquirer.prompt([
  {
    type: "input",
    name: "userId",
    message: "Enter your ID: ",
  },
  {
    type: "number",
    name: "userPin",
    message: "Enter your PIN: ",
  },
  {
    type: "list",
    name: "accountType",
    choices: ["Current", "Saving"],

    message: "Select Your Account Type: ",
  },
  {
    type: "list",
    name: "transactionType",
    choices: ["Fast Cash", " Withdrawl"],
    message: "Select your transaction ",
    when(answers){
       return answers.accountType 
    }
  },
  {
    type: "list",
    name: "amount",
    choices: [500,1000,5000,10000,20000],
    message: "Select your Amount: ",
    when(answers){
       return answers.accountType== "Fast Cash"
    }
  },
  {
    type: "number",
    name: "amount",
    message: "Enter your Amount: ",
    when(answers){
       return answers.accountType== " Withdrawl"
    }
  },
]);

if(answers.userId && answers.userPin){
    const balance = Math.floor(Math.random() * 100000 + 1)
    console.log("Previous Balance ", balance);
    const enterAmount = answers.amount
    

}
