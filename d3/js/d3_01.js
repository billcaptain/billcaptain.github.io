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

 function GO1() {
     var d3put = d3find.append('circle');
     d3put.attr('cx', 50).attr('cy', 50).attr('r', 40).attr('stroke', 'blue').attr('stroke-width', 3).attr('fill', 'white');
 }
 $('#go1').bind('click', GO1);

 function GO2() {
     var d3put = d3find.append('circle');
     d3put.attr('cx', 150).attr('cy', 50).attr('r', 40).attr('stroke', 'black').attr('stroke-width', 3).attr('fill', 'white');
 }
 $('#go2').bind('click', GO2);

 function GO3() {
     var d3put = d3find.append('circle');
     d3put.attr('cx', 250).attr('cy', 50).attr('r', 40).attr('stroke', 'red').attr('stroke-width', 3).attr('fill', 'white');
 }
 $('#go3').bind('click', GO3);

 function GO4() {
     var d3put = d3find.append('circle');
     d3put.attr('cx', 100).attr('cy', 100).attr('r', 40).attr('stroke', 'yellow').attr('stroke-width', 3).attr('fill', 'white');
 }
 $('#go4').bind('click', GO4);

 function GO5() {
     var d3put = d3find.append('circle');
     d3put.attr('cx', 200).attr('cy', 100).attr('r', 40).attr('stroke', 'green').attr('stroke-width', 3).attr('fill', 'white');
 }
 $('#go5').bind('click', GO5);
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