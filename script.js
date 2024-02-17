// Create a 16x16 grid
const gridContainer = document.querySelector(".grid-container");
for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  gridContainer.appendChild(gridItem);

  // Add event listener for hover
  gridItem.addEventListener("mouseover", () => {
    gridItem.classList.add("hovered"); // Add 'hovered' class
    console.log("noob");
  });

  // Add event listener for mouseout (optional)
  gridItem.addEventListener("mouseout", () => {
    setTimeout(function () {
      // Your code to execute after 1 second
      gridItem.classList.remove("hovered"); // Remove 'hovered' class
    }, 1000);
  });
}
