const addbtn = document.querySelector('.addbtn');
const uList = document.querySelector('.expense-list');
let expenseArr = []
//Object structure
// {
//     id: Date.now(),
//     value : expenseValue,
//     category: catego
// }

const totalAmount = document.querySelector("#totalAmount");

function render() {
    uList.innerHTML = "";
    expenseArr.forEach(expense => {
        display(expense);
    });
}

//total
function displayTotal() {
    const total = expenseArr.reduce((acc, curr) => {
        return acc + curr.value;
    }, 0);

    totalAmount.innerText = `Total: ₹${total}`;
}
//Display Values and Creating list
function display(expenseObj) {
    console.log("Display working");

    const list = document.createElement('li');
    const div = document.createElement('div');
    const amount = document.createElement('h2');
    const myCategory = document.createElement('h2');
    div.setAttribute("class", "expenseListDiv");

    //assigning values
    amount.innerText = "₹" + expenseObj.value;
    myCategory.innerText = "💖" + expenseObj.category;

    //Deletion
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener('click', function () {
        const index = expenseArr.findIndex(expense => expense.id === expenseObj.id);
        if (index != -1) {
            expenseArr.splice(index, 1)
            saveToLocal(expenseArr);
            render();
            displayTotal();
        }
    })

    // Editing Expense Andf save button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit Expense";

    editBtn.addEventListener("click", function () {

        // Hide buttons while editing
        editBtn.remove();
        deleteBtn.remove();

        const input = document.createElement("input");
        input.type = "number";
        input.value = expenseObj.value;

        amount.textContent = "";
        amount.appendChild(input);

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        div.appendChild(saveBtn);

        saveBtn.addEventListener("click", function () {

            const newAmount = Number(input.value);

            if (!isNaN(newAmount)) {

                expenseObj.value = newAmount;

                const index = expenseArr.findIndex(
                    expense => expense.id === expenseObj.id
                );

                if (index !== -1) {
                    expenseArr[index] = expenseObj;
                }

                // Save updated array
                saveToLocal(expenseArr);
                render();
                displayTotal()

            } else {
                amount.textContent = expenseObj.value;
            }
        });

    });

    // appending childs
    div.appendChild(editBtn);
    div.appendChild(deleteBtn)
    div.appendChild(amount)
    div.appendChild(myCategory);
    list.appendChild(div);
    uList.appendChild(list);

}

// Saving values to local Storage
function saveToLocal(expenseArr) {
    localStorage.setItem('Expense Array', JSON.stringify(expenseArr));
    console.log(localStorage);
}
// Add button event listener

addbtn.addEventListener('click', function () {

    let expenseValue = parseInt(document.querySelector('#input-field').value)
    const expenseObj = {}

    expenseObj.id = Date.now();
    let catego = document.getElementById("category");

    expenseObj.category = catego.value
    expenseObj.value = expenseValue;



    // display
    if (Number.isFinite(expenseValue)) {
        expenseArr.push(expenseObj);
        // console.log("Object is: ",expenseObj);
        // console.log("Array is:" ,expenseArr);

        //saving values
        saveToLocal(expenseArr);
        render();
        displayTotal();
    }
    else {
        alert('GIVE A VALID VALUE !')
    }
    document.querySelector('#input-field').value = "";
})

const savedExpenses = localStorage.getItem("Expense Array");

if (savedExpenses) {
    expenseArr = JSON.parse(savedExpenses);
    render();
}


