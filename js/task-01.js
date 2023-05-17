"use strict";
const categoryList = document.querySelectorAll("h2");
const categoryItem = document.querySelector(".item");
console.log(`Number of categories: ${categoryItem.length}`);

categoryItem.forEach((item) => {
    console.log("Category:", item.firstElementChild.textContent);
    const categoryName = item.lastElementChild;
    console.log("Elements", categoryName.children.length);
    
});