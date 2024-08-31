const categoriesContainer = document.getElementById("categories");
console.log(`Number of categories: ${categoriesContainer.children.length}`);
const allCategories = document.querySelectorAll(".item");
allCategories.forEach((category, i) => {
  const categoryContainer = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryContainer}`);
  const ulCategory = category.querySelector("ul");
  console.log(`Elements: ${ulCategory.children.length}`);
});