userAccount = {
"bankaccount" : {
    "bankAccountID" : function()
    {
        let generate = Math.floor(Math.random() * 10) + 1;
        return `Bank Account Id: ${generate}`;
    },
    "accountNumber" : "0123456789",
    "credentials": [{"username":"DPSJR20","password":"@Sikreto123","pin":"040822"}],
    "balance": 5000000,
    "createdAt":"April 8, 2022"
},
"debitCard": "0123 456 7890 0123",
"firstName":"Dante",
"lastName":"Satur",
"birthDate": "June 20, 1996",
"validID":['Driver License','C11-2000064','1212447'],
"address":"32 Milagrosa St. Bagong Barrio Caloocan City"
}

function getBankAccountDetails(username,password)
{
    for(let x = 0; x < userAccount.bankaccount.credentials.length; x++){
        if(username == userAccount.bankaccount.credentials[x]['username'] && password == userAccount.bankaccount.credentials[x]['password'] )
    {
        console.log(userAccount);
    }
    else
    {
        console.log(`Invalid Username or Password`);
    }
    }
}
function withdrawMoney(amount)
{
    balance = userAccount.bankaccount.balance - amount;
    console.log(`₱${amount} Withdraw successful! Remaining balance ₱${balance}`);
}
function depositMoney(amount)
{
    balance = userAccount.bankaccount.balance + amount;
    console.log(`₱${amount} Deposit Successful! New balance ₱${balance}`);
}
function balanceCheck()
{
    balance == this.userAccount.bankaccount.balance;
    console.log(balance);
}
function getUsers()
{
    for(let x = 0; x < userAccount.bankaccount.credentials.length; x++){
        console.log(`username: ${userAccount.bankaccount.credentials[x]['username']}`);
    }
}
function addUser(username,password,pin)
{
    userAccount.bankaccount.credentials.push({"username":username,"password":password,"pin":pin});
    console.log(`New User Successfully added!`)
    console.log(userAccount.bankaccount.credentials);
}
getBankAccountDetails('DPSJR20','@Sikreto123');
withdrawMoney(2500000);
depositMoney(3000000);
balanceCheck();
getUsers();
addUser('Pedro','Password123','010101')