var graph = document.getElementById("graph");
var context = graph.getContext('2d');
var height = graph.height/2*0.9;
var width = graph.width/2*0.9;
var length = height/2;
var hasSubmitted=false;
var r = height/5
context.translate(height/0.9,height/0.9);
drawCoords();
drawLines();
drawRect();
drawTriangle();
drawQuart();
function redraw(){
    requestAnimationFrame(animate)
}
function animate(){
    let inpField = document.getElementById("inputForm:rValue");
    let rad = height/5*(inpField.value);
    console.log(rad);
    context.clearRect(-width/0.9,height/0.9,width/0.9,-height/0.9);
    context.clearRect(width/0.9,-height/0.9,-width/0.9,height/0.9);
    context.clearRect(-width/0.9,-height/0.9,width/0.9,height/0.9);
    context.clearRect(width/0.9,height/0.9,-width/0.9,-height/0.9);
    context.clearRect(0, 0, graph.width, graph.height);
    drawCoords();
    drawLines();
    drawRect(rad);
    drawQuart(rad);
    drawTriangle(rad);
    // console.log("redrawn");
    drawPoints();
    // requestAnimationFrame(animate);
}
function drawCoords(){
    context.strokeStyle='black';
    context.lineWidth=2;
    context.beginPath();
    context.moveTo(0,-height);
    context.lineTo(0,height);
    context.stroke();
    context.beginPath();
    context.moveTo(-width,0);
    context.lineTo(width,0);
    context.stroke();
}

function drawLines(){
    context.strokeStyle='black';
    context.fillStyle='black'
    context.beginPath();
    context.fillText("-1",0, height/5);
    context.moveTo(5,height/5);
    context.lineTo(-5,height/5);
    context.stroke();

    context.beginPath();
    context.fillText("-2",0, 2*height/5);
    context.moveTo(5,2*height/5);
    context.lineTo(-5,2*height/5);
    context.stroke();

    context.beginPath();
    context.fillText("-3",0, 3*height/5);
    context.moveTo(5,3*height/5);
    context.lineTo(-5,3*height/5);
    context.stroke();

    context.beginPath();
    context.fillText("-4",0, 4*height/5);
    context.moveTo(5,4*height/5);
    context.lineTo(-5,4*height/5);
    context.stroke();

    context.beginPath();
    context.fillText("-5",0, height);
    context.moveTo(5,height);
    context.lineTo(-5,height);
    context.stroke();

    context.beginPath();
    context.fillText("1",0, -height/5);
    context.moveTo(5,-height/5);
    context.lineTo(-5,-height/5);
    context.stroke();

    context.beginPath();
    context.fillText("2",0, -2*height/5);
    context.moveTo(5,-2*height/5);
    context.lineTo(-5,-2*height/5);
    context.stroke();

    context.beginPath();
    context.fillText("3",0, -3*height/5);
    context.moveTo(5,-3*height/5);
    context.lineTo(-5,-3*height/5);
    context.stroke();

    context.beginPath();
    context.fillText("4",0, -4*height/5);
    context.moveTo(5,-4*height/5);
    context.lineTo(-5,-4*height/5);
    context.stroke();

    context.beginPath();
    context.fillText("5",0, -height);
    context.moveTo(5,-height);
    context.lineTo(-5,-height);
    context.stroke();

    context.beginPath();
    context.fillText("1",height/5, 0);
    context.moveTo(height/5,5)
    context.lineTo(height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("2",2*height/5, 0);
    context.moveTo(2*height/5,5)
    context.lineTo(2*height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("3",3*height/5, 0);
    context.moveTo(3*height/5,5)
    context.lineTo(3*height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("4",4*height/5, 0);
    context.moveTo(4*height/5,5)
    context.lineTo(4*height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("5",height, 0);
    context.moveTo(height,5)
    context.lineTo(height,-5);
    context.stroke();

    context.beginPath();
    context.fillText("-1",-height/5, 0);
    context.moveTo(-height/5,5)
    context.lineTo(-height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("-2",-2*height/5, 0);
    context.moveTo(-2*height/5,5)
    context.lineTo(-2*height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("-3",-3*height/5, 0);
    context.moveTo(-3*height/5,5)
    context.lineTo(-3*height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("-4",-4*height/5, 0);
    context.moveTo(-4*height/5,5)
    context.lineTo(-4*height/5,-5);
    context.stroke();

    context.beginPath();
    context.fillText("-5",-height, 0);
    context.moveTo(-height,5)
    context.lineTo(-height,-5);
    context.stroke();
}

function drawRect(r){
    context.strokeStyle='rgb(20, 50, 150, 0.7)';
    context.fillStyle='rgb(20, 50, 100, 0.4)';
    context.strokeRect(-r/2,0,r/2,-r);
    context.fillRect(-r/2,0,r/2,-r);
    // console.log("in rect")
}
function drawTriangle(r){
    context.strokeStyle='rgb(20, 50, 150, 0.7)';
    context.fillStyle='rgb(20, 50, 100, 0.4)';
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(r/2,0);
    context.lineTo(0,-r);
    context.stroke();
    context.fill();
}
function drawQuart(r){
    context.strokeStyle='rgb(20, 50, 150, 0.7)';
    context.fillStyle='rgb(20, 50, 100, 0.4)';
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,r);
    context.bezierCurveTo(0,r,-r,r,-r,0);
    context.moveTo(0,0);
    context.stroke();
    context.fill();
}
function drawPoints(){
    let table = document.getElementById("resultTable");
    let rows = table.getElementsByTagName('tr');
    for(let i = 0; i<rows.length;i++){
        let cells = rows[i].getElementsByTagName('td');
        if (cells[0] != null && cells[1] != null && r!==0) {
            let x = cells[0].innerText;
            let y = cells[1].innerText;
            if(y===""){
                continue;}
            let ptCoords = convertToCanvas(x, y);
            console.log(ptCoords[0],ptCoords[1]);
            if(i===rows.length-1){
                if(cells[3].innerText==='Hit'){
                    context.strokeStyle='green';
                    context.fillStyle='green';
                }else{
                    context.strokeStyle='red';
                    context.fillStyle='red';
                }
            }
            else{
                context.strokeStyle='grey';
                context.fillStyle='grey'
            }
            context.beginPath();
            context.arc(ptCoords[0], ptCoords[1], 3, 0, 2 * Math.PI);
            context.fill();
            // context.stroke();
            console.log("dots drawn")
        }
    }
}
function convertToCanvas(x,y){
    return [(x*height)/5, (-y*height)/5];
}
graph.addEventListener("mousedown", function (e) {
    // document.getElementById("inputForm:submit_button").disabled = true;

    var mouseX = parseFloat(e.clientX);
    var mouseY = parseFloat(e.clientY);
    var graphRect = graph.getBoundingClientRect();
    var seX = (mouseX - graphRect.left - graph.width / 2) / height * 5;
    var seY = -(mouseY - graphRect.top - graph.height / 2) / height * 5;

    document.getElementById("inputForm:x_value").value = seX;
    document.getElementById("inputForm:yValue").value = seY;

    document.getElementById("inputForm:x_value").dispatchEvent(new Event('change'));
    document.getElementById("inputForm:yValue").dispatchEvent(new Event('change'));

    let count1 = 0;
    let count2 = 0;
    document.getElementById("inputForm:submit_button").dispatchEvent(new Event('click'));

    faces.ajax.addOnEvent(function (data) {
        drawPoints();
    });

    drawPoints();

    console.log(
        mouseX - graphRect.left,
        mouseY - graphRect.top,
        seX / height * 5,
        seY / height * 5
    );
});


document.getElementById("resultTable").addEventListener("change", function() {
    redraw();
});
