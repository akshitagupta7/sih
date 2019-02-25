var arr=[];


function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(arr[0].name);
      }, 3000);
    });
  }
  
  async function asyncCall() {
   
   db.collection('maternaldb').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        //console.log(doc.data())
        //arr.push(JSON.parse(doc.data()))
        arr.push(doc.data());
        console.log(typeof(doc.data()))
        // console.log(doc.data())
    })
});
console.log(arr)
    var result = await resolveAfter2Seconds();
    console.log(result);
    var data1 = [{
        x: [arr[0].name, arr[1].name, arr[2].name],
        y: [arr[0].familyno,arr[1].familyno,arr[2].familyno],
        type: 'bar'
      }];
      
      Plotly.newPlot('myDiv', data1, {}, {showSendToCloud:true});
      var data2 = [{
        x: [arr[0].name, arr[1].name, arr[2].name],
        y: [arr[0].familyno,arr[1].familyno,arr[2].familyno],
        type: 'bar'
      }];
      
      Plotly.newPlot('myDiv1', data2, {}, {showSendToCloud:true});
    // expected output: 'resolved'
  }
  
  asyncCall();
//console.log(arr[0].name);
//console.log(JSON.parse(arr));

// for (var i = 0, length = arr.length; i < length; i++) {
//     for (obj in arr[i]) {
//         console.log(obj);
    
//     }
//     }
    
//console.log(arr[0]);
// var trace1 = {
//     type: 'bar',
//     x: [1, 2, 3, 4],
//     y: [5, 10, 2, 8],
//     marker: {
//         color: '#C8A2C8',
//         line: {
//             width: 2.5
//         }
//     }
// };

// var data = [ trace1 ];

// var layout = { 
//   title: 'Responsive to window\'s size!',
//   font: {size: 18}
// };

// Plotly.newPlot('myDiv', data, layout, {responsive: true});

// var data1 = [{
//     x: ['giraffes', 'orangutans', 'monkeys'],
//     y: [20, 14, 23],
//     type: 'bar'
//   }];
  
//   Plotly.newPlot('myDiv', data1, {}, {showSendToCloud:true});
// window.onload = function () {
//     const chartContainer1=document.querySelector('#chartContainer1');
//     var chart1 = new CanvasJS.Chart(chartContainer1,{
//     title :{
//         text: "Live Data"
//     },
//     data: [{
// 	type: "line",
//         dataPoints : [
// 	    { label: "apple",  y: 10  },
// 	    { label: "orange", y: 15  },
// 	    { label: "banana", y: 25  },
// 	    { label: "mango",  y: 30  },
//         { label: "grape",  y: 28  },
//         { label: "grape",  y: 28  }
// 	]
//     }]
// });

 
// chart1.render();

// }


// db.collection('maternaldb').where("houseno","==","12").get().then((snapshot) => {
//     list.innerHTML="";
//     snapshot.docs.forEach(doc => {
//         arr.push(doc);
//     })
// });