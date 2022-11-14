function createBankAcccount(name)
{
    let balance = 0;
    console.log(`Hi ${name}`);

    function checkBalance()
    {
        this.balance = balance;
        console.log(`Current Balance ${balance}`);

    }

    function depositAmount(amount)
    {
        balance = balance + amount;
        console.log(`Deposit Successful ! New balance is ${balance}`);

    }

    function withdrawAmount(amount)
    {
        if(amount > balance )
        {
            console.log(`You cannot withdraw an amount greater than your current balance`);
        }
        else
        {
            balance = balance - amount;
            console.log(`Withdraw Successful ! New balance is ${balance}`);
        }
        
    }
    return{
        checkBalance,
        depositAmount,
        withdrawAmount
    }
}
// createBankAcccount('Phia').depositAmount(500);

let phiaAccount = createBankAcccount('Phia');

phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.depositAmount(500);
phiaAccount.checkBalance();
phiaAccount.withdrawAmount(6000);
phiaAccount.checkBalance();


