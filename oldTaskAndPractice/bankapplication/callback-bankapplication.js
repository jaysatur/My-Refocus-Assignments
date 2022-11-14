let balance = 0;
function createBankAcccount(name) {
  console.log(`Hi ${name}`);
}
function checkBalance() {
  this.balance = balance;
  console.log(`Current Balance ${balance}`);
}

function depositAmount(amount) {
  balance = balance + amount;
  console.log(`Deposit Successful ! New balance is ${balance}`);
}

function withdrawAmount(amount) {
  if (amount > balance) {
    console.log(
      `You cannot withdraw an amount greater than your current balance`
    );
  } else {
    balance = balance - amount;
    console.log(`Withdraw Successful ! New balance is ${balance}`);
  }
}
// createBankAcccount('Phia').depositAmount(500);

createBankAcccount('phia');
depositAmount(500);
checkBalance();
withdrawAmount(600);
withdrawAmount(500);
checkBalance();
