"use strict";
const errorMessagElement = document.querySelector(".error_message");
const budgetInputElement = document.querySelector(".budget_input");
const expenseDelElement = document.querySelector(".expenses_input");
const expenseAmountEl = document.querySelector(".expenses_amount");
const tblRecordEl = document.querySelector(".tbl_card");
const cardsContainer = document.querySelector(".cards");

//cards content
const budgetCardEl = document.querySelector(".budget_card");
const expensesCardEl = document.querySelector(".expenses_card");
const balanceCardEl = document.querySelector(".balance_card");

let itemList = [];
let itemId = 0;

// ============Button Events ========
function btnEvents() {
   const btnBudgetCal = document.querySelector("btn_budget");
   const btnExpensesCal = document.querySelector("btn_expenses");

// =====Budget Event action =====
 btnBudgetCal.addEventListener("click", (e) => {
  e.preventDefault();
  budgetFun();

});

// =====expenses Event Action =====
 btnExpensesCal.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Expenses");
});
}
// ====== Calling Btns Event ======
document.addEventListener("DOMContentLoader", btnEvents);

// ======Budget Function ==========
function budgetFun(){
const budgetValue = budgetInputElement.value;
console.log(budgetValue);

}
