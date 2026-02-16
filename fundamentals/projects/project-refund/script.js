const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

const expenseList = document.querySelector("ul");
const expensesQuantity = document.querySelector("aside header p span");
const totalDisplay = document.querySelector("aside header h2");

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  value = Number(value) / 100;
  amount.value = formatCurrencyBRL(value);
};

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    amount: amount.value,
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    created_at: new Date(),
  };

  expenseAdd(newExpense);
};

function expenseAdd(newExpense) {
  try {
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");
    expenseItem.setAttribute("data-id", newExpense.id);

    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", newExpense.category_name);

    const expenseInfo = document.createElement("div");

    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    const expenseCategory = document.createElement("span");
    expenseCategory.textContent = newExpense.category_name;

    const expenseAmount = document.createElement("span");
    expenseAmount.classList.add("expense-amount");

    const rawAmountText = newExpense.amount
      .toUpperCase()
      .replace("R$", "")
      .trim();

    expenseAmount.setAttribute("data-value", rawAmountText);

    expenseAmount.innerHTML = `<small>R$</small>${rawAmountText}`;

    const removeIcon = document.createElement("img");
    removeIcon.setAttribute("src", "img/remove.svg");
    removeIcon.setAttribute("alt", "Remover despesa");
    removeIcon.classList.add("remove-icon");

    removeIcon.onclick = () => {
      expenseRemove(expenseItem);
    };

    expenseInfo.append(expenseName, expenseCategory);
    expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
    expenseList.append(expenseItem);

    updateTotals();
  } catch (error) {
    alert("Não foi possível atualizar a lista de despesas.");
    console.log(error);
  }
}

function expenseRemove(expenseItem) {
  try {
    expenseList.removeChild(expenseItem);
    updateTotals();
  } catch (error) {
    alert("Não foi possível remover a despesa.");
    console.log(error);
  }
}

function updateTotals() {
  try {
    const items = expenseList.children;

    expensesQuantity.textContent = `${items.length} ${
      items.length > 1 ? "despesas" : "despesa"
    }`;

    let total = 0;
    for (let i = 0; i < items.length; i++) {
      const amountElement = items[i].querySelector(".expense-amount");

      const amountString = amountElement.getAttribute("data-value");

      const cleanedAmount = amountString.replace(",", ".");
      const amountValue = Number(cleanedAmount);

      total += amountValue;
    }

    if (totalDisplay) {
      const formattedTotal = formatCurrencyBRL(total).replace("R$", "");
      totalDisplay.innerHTML = `<small>R$</small>${formattedTotal}`;
    }
  } catch (error) {
    console.log(error);
    alert("Não foi possível atualizar os totais.");
  }
}
