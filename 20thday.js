const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");

const list = document.getElementById("list");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function saveData() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function updateSummary() {

    let income = 0;
    let expense = 0;

    transactions.forEach(item => {

        if(item.type === "income"){
            income += item.amount;
        }else{
            expense += item.amount;
        }

    });

    incomeEl.innerText = "₹" + income;
    expenseEl.innerText = "₹" + expense;
    balanceEl.innerText = "₹" + (income - expense);

}

function showTransactions(){

    list.innerHTML = "";

    transactions.forEach((item,index)=>{

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.text}</span>

            <span>
                ${item.type==="income"?"+":"-"} ₹${item.amount}
            </span>

            <button class="delete" onclick="deleteTransaction(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);

    });

    updateSummary();

}

form.addEventListener("submit",function(e){

    e.preventDefault();

    const transaction = {

        text:text.value,
        amount:Number(amount.value),
        type:type.value

    };

    transactions.push(transaction);

    saveData();

    showTransactions();

    form.reset();

});

function deleteTransaction(index){

    transactions.splice(index,1);

    saveData();

    showTransactions();

}

showTransactions();