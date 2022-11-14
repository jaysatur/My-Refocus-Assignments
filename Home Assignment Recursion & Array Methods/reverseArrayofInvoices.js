let InvoiceList = [
    "Invoice 008",
    "Invoice 007",
    "Invoice 006",
    "Invoice 005",
];
function insertToBottom(value){
    if(value == "Invoice 000"){
        return InvoiceList;
    }else{
        return InvoiceList.push(value);
    }
}
function reverseList(){
    let Invoices = InvoiceList.sort((a,b)=>a.InvoiceList - b.InvoiceList);
    console.log(Invoices.reverse().join(" "));
}
InvoiceList.push("Invoice 004");
InvoiceList.push("Invoice 003");
InvoiceList.push("Invoice 002");
InvoiceList.push("Invoice 001");


insertToBottom("Invoice 060");
console.log(InvoiceList.join(" "));
reverseList();