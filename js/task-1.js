const categories = document.querySelectorAll(".item");
console.log(categories);
console.log(`Namber of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  console.log(`Category: ${categoryTitle.textContent}`);
  const categoryElements = category.querySelectorAll("li");
  console.log(`Elements: ${categoryElements.length}`);
});
