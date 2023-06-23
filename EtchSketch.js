function drawGrid(){
    let tbl = document.getElementById("etch")

    for(i = 0; i < 16; i++){
        let row =  document.createElement("tr")
        row.id = "row" + i
        tbl.append(row)

        // Adding columns
        let col = document.getElementById("row" + i)
        for(j = 0; j < 32; j++){
            let elemCol = document.createElement("td")
            col.append(elemCol)
        }
    }
}

window.onload = drawGrid()