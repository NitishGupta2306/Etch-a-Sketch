let isColored = 0;

function randColor(){
    return("rgb(" + (Math.random() * 255) + "," + (Math.random() * 255) + "," + (Math.random() * 255) + ")");
}

function drawGrid(){
    let tbl = document.getElementById("etch");

    for(i = 0; i < 16; i++){
        // Table element
        let row =  document.createElement("tr");

        // Adding each Row
        row.id = "row" + i;
        tbl.append(row);

        // Adding Columns
        for(j = 0; j < 28; j++){
            // elemCol = Each individual block
            let elemCol = document.createElement("td");
            row.append(elemCol);

            // Drawing in elements
            elemCol.addEventListener("mouseover", function(){
                let color = randColor();

                console.log(isColored)

                if (isColored == 0){
                    elemCol.style.backgroundColor = 'black';
                }
                else{
                    elemCol.style.backgroundColor = color;
                }

            })
        }
    }

}

function resetButton(){
    let reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
        // Refreshing page to reset elements drawn
        location.reload();
    })
}

function colorOp(){
    let color = document.getElementById("colorOp");
    let black = document.createTextNode("Black Pixels")
    let rgb = document.createTextNode("Random RGB Pixels")

    color.addEventListener("click", function(){
        if (isColored == 0){
            isColored = 1;
        }
        else{
            isColored = 0;
        }
            
    })
}

window.onload = drawGrid();
window.onload = resetButton();
window.onload = colorOp();