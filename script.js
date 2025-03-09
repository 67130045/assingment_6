
function myFunction() {
    let items = [];
    let count = prompt("กรุณาใส่คำ แล้วเว้นด้วยช่องว่างเพื่อแบ่งหัวข้อ");
    items = count.split(' ')


    let listElement = document.getElementById("list");
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}