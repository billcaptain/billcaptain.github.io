//<circle cx= "125" cy= "150" r= "40" stroke= "blue" stroke- width="3" fill= "white" />
//<circle cx="225" cy="150" r="40" stroke="black" stroke-width="3" fill="white" />
//<circle cx="325" cy="150" r="40" stroke="red" stroke-width="3" fill="white" />
//<circle cx="175" cy="200" r="40" stroke="yellow" stroke-width="3" fill="white" />
//<circle cx="275" cy="200" r="40" stroke="green" stroke-width="3" fill="white" />

// <ellipse cx="200" cy="200" rx="100" ry="80" style="fill:white;stroke:black;stroke-width:2" />
//     <ellipse cx="180" cy="290" rx="10" ry="20" style="fill:white;stroke:black;stroke-width:2" />
//      <ellipse cx="220" cy="290" rx="10" ry="20" style="fill:white;stroke:black;stroke-width:2" />
//       <circle cx="160" cy="220" r="40" stroke="black" stroke-width="3" fill="white" />
//        <circle cx="310" cy="200" r="10" stroke="black" stroke-width="3" fill="white" />
//       <circle cx="145" cy="220" r="10" stroke="black" stroke-width="3" fill="white" />
//         <circle cx="175" cy="220" r="10" stroke="black" stroke-width="3" fill="white" />
//        <circle cx="140" cy="160" r="15" stroke="black" stroke-width="3" fill="white" />
//          <circle cx="180" cy="160" r="15" stroke="black" stroke-width="3" fill="white" />
//         <polygon points="200,300 250,350 150,350" style="fill:white;stroke:black;stroke-width:1" />
//          <polygon points="250,300 300,350 200,350" style="fill:white;stroke:black;stroke-width:1" />
//         <polygon points="150,300 200,350 100,350" style="fill:white;stroke:black;stroke-width:1" />



var d3find = d3.select('svg');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white');
// var d3put = d3find.append('circle');
// d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white');
// var d3put = d3find.append('circle');
// d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white');

function GO11() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g01');
}
$('#line11').bind('click', GO11);

function GO21() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g02');
}
$('#line21').bind('click', GO21);

function GO31() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g03');
}
$('#line31').bind('click', GO31);

function GO41() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g04');
}
$('#line41').bind('click', GO41);

function GO51() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g05');
}
$('#line51').bind('click', GO51);

function HIDE1() {
    $('#g01').remove();
    $('#g02').remove();
    $('#g03').remove();
    $('#g04').remove();
    $('#g05').remove();
}


function GO12() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g06');
}
$('#line12').bind('click', GO12);

function GO22() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g07');
}
$('#line22').bind('click', GO22);

function GO32() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g08');
}
$('#line32').bind('click', GO32);

function GO42() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g09');
}
$('#line42').bind('click', GO42);

function GO52() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g10');
}
$('#line52').bind('click', GO52);

function HIDE2() {
    $('#g06').remove();
    $('#g07').remove();
    $('#g08').remove();
    $('#g09').remove();
    $('#g10').remove();
}




function GO13() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g11');
}
$('#line13').bind('click', GO13);

function GO23() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g12');
}
$('#line23').bind('click', GO23);

function GO33() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g13');
}
$('#line33').bind('click', GO33);

function GO43() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g14');
}
$('#line43').bind('click', GO43);

function GO53() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g15');
}
$('#line53').bind('click', GO53);

function HIDE3() {
    $('#g11').remove();
    $('#g12').remove();
    $('#g13').remove();
    $('#g14').remove();
    $('#g15').remove();
}



function GO14() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g16');
}
$('#line14').bind('click', GO14);

function GO24() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g17');
}
$('#line24').bind('click', GO24);

function GO34() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g18');
}
$('#line34').bind('click', GO34);

function GO44() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g19');
}
$('#line44').bind('click', GO44);

function GO54() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g20');
}
$('#line54').bind('click', GO54);

function HIDE4() {
    $('#g16').remove();
    $('#g17').remove();
    $('#g18').remove();
    $('#g19').remove();
    $('#g20').remove();
}





function GO15() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g21');
}
$('#line15').bind('click', GO15);

function GO25() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g22');
}
$('#line25').bind('click', GO25);

function GO35() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g23');
}
$('#line35').bind('click', GO35);

function GO45() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g24');
}
$('#line45').bind('click', GO45);

function GO55() {
    var d3put = d3find.append('circle');
    d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white').attr('id', 'g25');
}
$('#line55').bind('click', GO55);

function HIDE5() {
    $('#g21').remove();
    $('#g22').remove();
    $('#g23').remove();
    $('#g24').remove();
    $('#g25').remove();
}

function REMOVE() {
    $('#g01').remove();
    $('#g02').remove();
    $('#g03').remove();
    $('#g04').remove();
    $('#g05').remove();
    $('#g06').remove();
    $('#g07').remove();
    $('#g08').remove();
    $('#g09').remove();
    $('#g10').remove();
    $('#g11').remove();
    $('#g12').remove();
    $('#g13').remove();
    $('#g14').remove();
    $('#g15').remove();
    $('#g16').remove();
    $('#g17').remove();
    $('#g18').remove();
    $('#g19').remove();
    $('#g20').remove();
    $('#g21').remove();
    $('#g22').remove();
    $('#g23').remove();
    $('#g24').remove();
    $('#g25').remove();
}

//var d3find = d3.select('svg svg2');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 160).attr('cy', 220).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 310).attr('cy', 200).attr('r', 10).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 145).attr('cy', 220).attr('r', 10).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 175).attr('cy', 220).attr('r', 10).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 140).attr('cy', 160).attr('r', 15).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
//var d3put = d3find.append('circle');
//d3put.attr('cx', 180).attr('cy', 160).attr('r', 15).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');