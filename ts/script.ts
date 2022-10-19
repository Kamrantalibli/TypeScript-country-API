var countStart: number = 0;
var countEnd: number = 50;

var btn1: any = document.querySelector('#one');
var btn2: any = document.querySelector('#two');
var btn3: any = document.querySelector('#three');
var btn4: any = document.querySelector('#four');
var btn5: any = document.querySelector('#five');


var countryList = () =>{
fetch("https://restcountries.com/v3.1/all")
  .then( (data)=> data.json() )
  .then((comingapi: any) => {
    var li = "";
    for (let x: number = countStart; x < countEnd; x++) {
      // li += `<p><span>${x + 1}-</span>${comingapi[x].name.common}</p>`;
      li += `<div id= data-aos="fade-up" class="col-3 mt-5"><div class="card" style="width: 15rem height:210px;">
                         <img src="${comingapi[x].flags.png}" class="card-img-top" alt="...">
                           <div class="card-body">
                             <h5 class="card-title">${x+1}  ${comingapi[x].name.common}</h5>
                           </div>
                         </div>
                       </div>`
    }

    const ol: any = document.querySelector("ol");
    ol.innerHTML = li;

    // console.log(comingapi[0].capital[0]);
  });

}

btn1.onclick = ()=>{
    countStart = 0;
    countEnd = 50;
    countryList();
}
btn2.onclick = ()=>{
  countStart = 50;
  countEnd = 100;
  countryList();
}
btn3.onclick = ()=>{
  countStart = 100;
  countEnd = 150;
  countryList();
}
btn4.onclick = ()=>{
  countStart = 150;
  countEnd = 200;
  countryList();
}
btn5.onclick = ()=>{
  countStart = 200;
  countEnd = 250;
  countryList();
}

countryList();
console.log(btn1);
