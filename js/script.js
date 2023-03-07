let numberOfSeries = +prompt("Nechta serial ko`rdingiz?", "")

function startApp() {
  numberOfSeries = +prompt("Nechta serial ko`rdingiz?", "")

  while (
    numberOfSeries == "" ||
    numberOfSeries == null ||
    isNaN(numberOfSeries )
  ) {
    numberOfSeries = +prompt("Nechta serial ko`rdingiz?", "")
  }
}
startApp()

const serialDB = {
  count: numberOfSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
}

function rememberMySeries(){
  for (let i = 0; i < 2; i++) {
    const ohirgiserial = prompt("Ohirgi ko`rgan serialingiz?"),
      nechchibaho = prompt("Nechchi baho berasiz?")
  
    if (
      ohirgiserial != null &&
      nechchibaho != null &&
      ohirgiserial != "" &&
      nechchibaho != ""
    ) {
      serialDB.series[ohirgiserial] = nechchibaho
      console.log("done")
    } else {
      console.log("error")
      i--
    }
  }
}

// rememberMySeries()

function detectLevelSeries() {

  if (serialDB.count <= 5) {
    console.log("Siz kam serial ko`rar ekansiz")
  } else if (serialDB.count >= 5 && serialDB.count < 10) {
    console.log("Siz klassik tomoshabin ekansiz!")
  } else if (serialDB.count > 10) {
    console.log("Siz serialchi zvezda ekansiz")
  } else {
    console.log("Error")
  }
}

detectLevelSeries()

function showDb(hidden) {
  if(!hidden){
    console.log(serialDB)
  }else{
    console.log("Malumotlarni ko`rishga ruhsat yo`q")
  }
}
showDb(serialDB.privat)


function writeGenres (){
for(let i=0; i<=2; i++ ){
  const liked =prompt(`Yaxshi ko'rgan janringiz${i+1}`)
  serialDB.genres[i]=liked
}

}
 writeGenres()



 

 function first (ll){
  //code
  setTimeout(() => {
    
    console.log(1)
    ll();
  }, 1000);

 }

  function second() {
  //code
  console.log(2)
 }
 

 first(second);
  




 function edu (subject, callback){
  console.log(`I wanna teach ${subject}` );
  callback();
 }


 edu("JavaScript ", function () {
  console.log("That's Great");
 })
  

const theif ={
  jacket:"black",
  height:1.7,
  colors:{
    hair:"grey",
    style:"curley"
  },
  howOut: function(){
    console.log("Fast with help doors")
  }

}
theif.howOut()

const {hair, style}=theif.colors;
console.log(hair)
console.log(style)


for (let key in theif){
  if(typeof theif[key]==="object"){
    for(let i in theif[key]){
      console.log(`Propertycolor ${i} has value ${theif[key][i]}`)
    }
  }else{

    console.log(`Property ${key} is value ${ theif[key]}`)
  }
}






const arrbek =[1,2,3,4,5,6,7];

// arrbek[99]=0
// arrbek.pop(),
// arrbek.push()
// console.log(arrbek.length)

// for(let i=0; i<arrbek.length; i++){
//   console.log(arrbek[i])
// }

// for (let fjdk of arrbek){
//   console.log(fjdk)
// }
// console.log(arrbek)

arrbek.forEach(function (item, index,arrbek){
  console.log(`${index}: ${item} is arr ${arrbek}`)
})














// for(let keys in theif){
//   if(typeof theif[keys] ==="object"){
//     for(let i in theif[keys]){
//      console.log(`Property ${i} is value ${theif[keys][i]}`)
//     } 
//   }else{

//     console.log(`Property ${keys} is value ${ theif[keys]}`)
//   }
// }


























