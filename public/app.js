const list=document.querySelector('#list');
const form = document.querySelector('#add-elements');
//var dataset=[10,20,30,40];

//create elements and rendering function to display data
function render(doc){
	let li=document.createElement('li');
	let name=document.createElement('span');
	let phone=document.createElement('span');
	let houseno=document.createElement('span');

	li.setAttribute('data-id',doc.id);
	name.textContent=doc.data().name;
	phone.textContent=doc.data().phone;
	//dataset.push(doc.data().phone);
	houseno.textContent=doc.data().houseno;

	li.appendChild(name);
	li.appendChild(phone);
	li.appendChild(houseno);
	list.appendChild(li);

}



db.collection('maternaldb').get().then((snapshot) => {
    console.log(snapshot.docs.forEach(doc => {
        render(doc);
    }))
});

document.getElementById("12").addEventListener('click',(e)=>{
db.collection('maternaldb').where("houseno","==","12").get().then((snapshot) => {
    console.log(snapshot.docs.forEach(doc => {
        list.innerHTML="";
        render(doc)
    }))
});
});

document.getElementById("14").addEventListener('click',(e)=>{
db.collection('maternaldb').where("houseno","==","14").get().then((snapshot) => {
    console.log(snapshot.docs.forEach(doc => {
        list.innerHTML="";
        render(doc)
    }))
});
});




/*
var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);


var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });
*/

