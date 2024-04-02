import inquirer from "inquirer";
async function start() {
    console.log("\n\t<<<<Welcome to As Bank>>>>\t\n");
    let myBalance = 20000;
    console.log(`\n\nYour current balance is:  ${myBalance}.`);
    let pin = 9999;
    // import inquirer from "inquirer";
    // import Choice from "inquirer/lib/objects/choice.js";
    let pinCode = await inquirer.prompt([
        {
            name: "yourPin",
            type: "number",
            message: "Please enter  your PIN:"
        }
    ]);
    // if(myBalance <= 2000){
    //     console.log("You dont have that balance");
    // }
    if (pin == pinCode.yourPin) {
        console.log("Correct pin code!!!");
        let option = await inquirer.prompt([
            {
                name: "choiceOne",
                Message: "Please select one option",
                type: "list",
                choices: ["Withrow", "Check balance", "Transfer money", "fast cash"]
            }
        ]);
        if (option.choiceOne == "Withrow") {
            let withdrawAmount = await inquirer.prompt([
                {
                    name: "howMuch",
                    type: "number",
                    message: "How much would you like to withraw?"
                }
            ]);
            if (withdrawAmount.howMuch <= myBalance) {
                let balance = myBalance -= withdrawAmount.howMuch;
                console.log(`Your remaning balance is: ${balance}`);
            }
            else {
                console.log("You dont have that much money in your account");
            }
            //    myBalance -= withdrawAmount.howMuch
            //  console.log(`Your remaning balance is: ${myBalance}`);
        }
        else if (option.choiceOne == "Check balance") {
            console.log(`Your balance is: ${myBalance}`);
        }
        if (option.choiceOne === "Transfer money") {
            let transfer = await inquirer.prompt([
                {
                    name: "toWhom",
                    type: "string",
                    message: "How much money you want to transfer?"
                }
            ]);
            if (transfer.toWhom <= myBalance) {
                let balance2 = myBalance -= transfer.toWhom;
                console.log(`${transfer.toWhom} is sucesfully transfer.`);
                console.log(`Your remaining Balance : ${balance2}. `);
            }
            else {
                console.log("You dont have that much money in your account");
            }
        }
        if (option.choiceOne === "fast cash") {
            let quickCash = await inquirer.prompt([
                {
                    name: "cashAmount",
                    type: "list",
                    message: "select one",
                    choices: ["2000", "5000", "10000", "15000", "18000"]
                }
            ]);
            myBalance -= quickCash.cashAmount;
            console.log(`Your remaining Balance : ${myBalance}. `);
        }
    }
    else {
        console.log("Incorrect pin! Try again");
    }
    let selecte = await inquirer.prompt([{
            name: "selectee",
            type: "list",
            message: "Do you want to use ATM again",
            choices: ["Yes", "No"],
        }]);
    if (selecte.selectee === "No") {
        console.log("Thank You for using our service!");
    }
    else {
        await start();
    }
}
start();
