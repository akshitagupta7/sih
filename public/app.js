const list=document.querySelector('#list');
//const form = document.querySelector('#add-elements');
//var dataset=[10,20,30,40];

//create elements and rendering function to display data
function render(doc){
	let li=document.createElement('li');
	let name=document.createElement('span');
	let phone=document.createElement('span');
    let houseno=document.createElement('span');
    let familyno=document.createElement('span');
    let members=document.createElement('span');
    let childrencount=document.createElement('span');
    let expecteddd=document.createElement('span');
    let dob=document.createElement('span');

    //dataset.push(doc.data().phone);
	li.setAttribute('data-id',doc.id);
	name.textContent=doc.data().name;
    phone.textContent=doc.data().phone;
    familyno.textContent=doc.data().familyno;
    members.textContent=doc.data().members;
    childrencount.textContent=doc.data().childrencount;
    houseno.textContent=doc.data().houseno;
  //  expecteddd.textContent=new Date(doc.data().expectedd)
   // dob.textContent=doc.data().dob;

    li.appendChild(familyno);
    li.appendChild(name);
	li.appendChild(phone);
    li.appendChild(houseno);
    li.appendChild(childrencount);
    li.appendChild(members);
    li.appendChild(expecteddd);
    li.appendChild(dob);
	list.appendChild(li);

}



db.collection('maternaldb').get().then((snapshot) => {
    console.log(snapshot.docs.forEach(doc => {
        render(doc);
    }))
});

document.getElementById("start").addEventListener('click',(e)=>{
    db.collection('maternaldb').get().then((snapshot) => {
        list.innerHTML="";
        console.log(snapshot.docs.forEach(doc => {
            render(doc);
        }))
    });
    });

document.getElementById("12").addEventListener('click',(e)=>{
db.collection('maternaldb').where("houseno","==","12").get().then((snapshot) => {
    list.innerHTML="";
    console.log(snapshot.docs.forEach(doc => {
        render(doc);
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

