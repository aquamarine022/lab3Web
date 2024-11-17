function getValuesFromTable(data) {
    clearPoints();
    const table = document.getElementById('resultTable');

    const firstRow = table.rows[1];
    const r = parseFloat(firstRow.cells[2].innerText);

    if (!isNaN(r)) {
        document.getElementById('label-r').textContent = `${r}`;
        document.getElementById('label-half-r').textContent = `${(r / 2).toFixed(2)}`;
        document.getElementById('label-minus-r').textContent = `-${r}`;
        document.getElementById('label-minus-half-r').textContent = `-${(r / 2).toFixed(2)}`;

        document.getElementById('label-r-y').textContent = `${r}`;
        document.getElementById('label-half-r-y').textContent = `${(r / 2).toFixed(2)}`;
        document.getElementById('label-minus-r-y').textContent = `-${r}`;
        document.getElementById('label-minus-half-r-y').textContent = `-${(r / 2).toFixed(2)}`;

        for (let i = 1; i < table.rows.length; i++) {
            const row = table.rows[i];
            const x = parseFloat(row.cells[0].innerText);
            const y = parseFloat(row.cells[1].innerText);
            const result = row.cells[3].innerText === "Hit";
            drawPoint(x, y, r, result);
        }
    }
}

function clearPoints(data) {
    const svg = document.querySelector("svg");
    const circles = svg.querySelectorAll("circle");
    circles.forEach(circle => circle.remove());
}

function drawPoint(x, y, r, result) {
    const svg = document.querySelector("svg");
    const scaleFactor = 150 / r;
    const scaledX = x * scaleFactor;
    const scaledY = -y * scaleFactor;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute("cx", scaledX);
    circle.setAttribute("cy", scaledY);
    circle.setAttribute("r", 5);
    circle.setAttribute("fill", result ? "green" : "red");

    svg.appendChild(circle);
}
document.getElementById('graph-svg').addEventListener('click', function(event) {
    // let r = parseFloat(document.getElementById('j_idt7:rValue_label').innerText);
    let r = document.getElementsByClassName('rValueClass')[0].value;
    console.log(r);
    if (r === 0) {
        console.error("Invalid R value");
        return;
    }
    const svg = event.currentTarget;
    var pt = svg.createSVGPoint()
    pt.x = event.clientX
    pt.y = event.clientY
    var cursorpt = pt.matrixTransform(svg.getScreenCTM().inverse())
    let [x,y] = [cursorpt.x,cursorpt.y]
    console.log([x, y]);
    x=(x-200)/150;
    y=-(y-200)/150;
    x*=r
    y*=r
    x = x.toFixed (3);
    y = y.toFixed (3);

    if (y < -5 || y > 5) {
        console.error("Y value is out of range");
        return;
    }
    document.getElementsByClassName('yValueClass')[0].value = y;
    document.getElementsByClassName('xValueClass')[0].value = x;
    document.getElementsByClassName('Submit')[0].click();
});

window.onload = getValuesFromTable();

