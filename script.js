 // Create a 16x16 grid
 const gridContainer = document.querySelector('.grid-container');
 for (let i = 0; i < 16 * 16; i++) {
     const gridItem = document.createElement('div');
     gridItem.classList.add('grid-item');
     gridContainer.appendChild(gridItem);

     // Add event listener for hover
     gridItem.addEventListener('mouseover', function() {
     this.classList.add('hovered'); // Add 'hovered' class
     console.log("mouseover event listener");
     });

    // Add event listener for mouseout 
    gridItem.addEventListener('mouseout', function() {
        this.classList.remove('hovered'); // Remove 'hovered' class
        console.log("mouseout event listener");
    });
 }

  
