function addGrocery(){
    let item = document.getElementById("item").value;
    let category = document.getElementById("category").value;

    if(!document.getElementById(category)){
        let groceryContainer = document.getElementById("grocery-container");
        let categoryBox = document.createElement("div");
        categoryBox.id = category;
        let categoryHeader = document.createElement("h4");
        categoryHeader.append(category)
        categoryBox.appendChild(categoryHeader);
        let groceryList = document.createElement("ul");
        groceryList.id = category + "-list";
        categoryBox.appendChild(groceryList);
        groceryContainer.appendChild(categoryBox);
    }

    let ul = document.getElementById(category + "-list");
    let li = document.createElement("li");
    li.append(item);
    ul.appendChild(li);

}