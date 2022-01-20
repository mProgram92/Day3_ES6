// ES 6 Rest & Spread Operator

// //Rest 
// /// ... three dot use for rest operator
// We Pass element and combine in array
// function useRest(a,b,c,d,...newData){

//       //  console.log(newData);
//         if(a == b && b == c && c == d){
//             console.log("All Number are equal");
//         }    
//         else
//         {
//             console.log("Number are different");
//         }
// }
// const res = useRest(1,2,3,4,10,501,20,48);
// console.log(res);


//Spread
//This opposite of rest , we divied the element in array

// var FullData = ['Mahesh','Mohan','Kshirsagar','Surat',10];
// function getData(Fn,Mn,Ln,C,a){
//     console.log(Fn,Mn,Ln,C,a);
// }
// getData(...FullData);


// Work With Object -->Rest

// var Employ = {
//         name :'Sanjay',
//         Eid  : 55,
//         Age  : 20,
//         Desg : 'Web Developer',
//         City : 'Sachin' ,
//         Skill:['HTML','CSS','Javascripts']

// }
// //const {name} = Employ;
// //console.log(name);
// const {...rest} = Employ;
// console.log(rest);


// // // Work With Object -->Spread
// var eUpdate ={
//     ...Employ, // Rest access the Our object
//     age : 25
// }
// console.log(eUpdate); 


//Var vs Let vs Const:

// let lan = "Marathi";
// console.log(lan)

// const Pi = 3.12;
// Pi = 4;


//Var is function scope
//let and const are block scope

//Hoisting

//mostlity use let and const not  use var


// Async JS Programming  
//Async/Await, Promises, Callbacks 

const Edata =[
    { Name       :"Mahesh",
      Profression:"React JS",
      Comapany   :"Broadview",
      Mno        :9876543210
    },
    { Name       :"Sanjay",
      Profression:"Web Developer",
      Comapany   :"White Orange",
      Mno        :7894561230
    },
    { Name       :"Prashant",
      Profression:"Full Stack Engineer",
      Comapany   :"Xtech",
      Mno        :8547963210
    },
    { Name       :"Sagar",
      Profression:"Data Science",
      Comapany   :"ComData Pvt",
      Mno        :6325417890
    },
];

// function getData(){
//     let output="";
//     setTimeout(()=>{
//         Edata.forEach((value,index, Array)=>{
//             //til sign we use with $ ` `
//             output+=`<li>${value.Comapany}</li>`;     
//         })
//         document.getElementById('demo2').innerHTML = output;
//     },1000)
// }

// function creatData(newData){
//     setTimeout(()=>{
//             Edata.push(newData);
//     },2000);
// }

// getData();
// creatData({
//             Name       :"Faiz",
//             Profression:"Project Engineer",
//             Comapany   :"Wipro Pvt",
//             Mno        :7854693210});   


//Callback Function

// function getData(){
//     let output="";
//     setTimeout(()=>{
//         Edata.forEach((value,index, Array)=>{
//             //til sign we use with $ ` `
//             output+=`<li>${value.Comapany}</li>`;     
//         })
//         document.getElementById('demo2').innerHTML = output;
//     },1000)
// }

// function creatData(newData,callback){
//     setTimeout(()=>{
//             Edata.push(newData);
//             callback();
//     },2000);
// }


//  creatData({
//              Name       :"Faiz",
//              Profression:"Project Engineer",
//              Comapany   :"Wipro Pvt",
//              Mno        :7854693210
//            },

//         //    { 
//         //     Name       :"Mayank",
//         //     Profression:"Android Dev",
//         //     Comapany   :"WeblineIndia",
//         //     Mno        :8574693210
//         //    },
//         getData); 

 

// Promises
//Promises have  two agrument first is reject and resolve 


// function getData(){
//     let output="";
//     setTimeout(()=>{
//         Edata.forEach((value,index, Array)=>{
//             //til sign we use with $ ` `
//             output+=`<li>${value.Comapany}</li>`;     
//         })
//         document.getElementById('demo2').innerHTML = output;
//     },1000)
// }

// function creatData(newData){
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             Edata.push(newData);   
//             let error = false;
//             if(!error){
//                 resolve();
//             }   
//             else{
//                 reject("This is error in Code...");
//             }
//         },2000); 
//     })
    
// }
// creatData({
//              Name       :"Faiz",
//              Profression:"Project Engineer",
//              Comapany   :"Wipro Pvt",
//              Mno        :7854693210
//            }).then(getData);
//then(getData).catch(err => console.log(err));


// Async/Await//

function getData(){
        let output="";
        setTimeout(()=>{
            Edata.forEach((value,index, Array)=>{
                //til sign we use with $ ` `
                output+=`<li>${value.Comapany}</li>`;     
            })
            document.getElementById('demo2').innerHTML = output;
        },1000)
    }
    
    function creatData(newData){
        
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                Edata.push(newData);   
                let error = false;
                if(!error){
                    resolve();
                }   
                else{
                    reject("Error Detch in this Code...");
                }
            },2000); 
        })
        
}
    /*creatData({
                 Name       :"Faiz",
                 Profression:"Project Engineer",
                 Comapany   :"Wipro Pvt",
                 Mno        :7854693210
               }).then(getData).catch(err => console.log(err));    
    */

//Async & Await
async function start(){
  await  creatData({
        Name       :"Faiz",
        Profression:"Project Engineer",
        Comapany   :"Wipro Pvt",
        Mno        :7854693210})
        getData();
}

start();