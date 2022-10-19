var countStart = 0;
var countEnd = 50;
var btn1 = document.querySelector('#one');
var btn2 = document.querySelector('#two');
var btn3 = document.querySelector('#three');
var btn4 = document.querySelector('#four');
var btn5 = document.querySelector('#five');
var countryList = function () {
    fetch("https://restcountries.com/v3.1/all")
        .then(function (data) { return data.json(); })
        .then(function (comingapi) {
        var li = "";
        for (var x = countStart; x < countEnd; x++) {
            // li += `<p><span>${x + 1}-</span>${comingapi[x].name.common}</p>`;
            li += "<div data-aos=\"fade-up\" class=\"col-3 mt-5\"><div class=\"card\" style=\"width: 15rem height:210px;\">\n                         <img src=\"".concat(comingapi[x].flags.png, "\" class=\"card-img-top\" alt=\"...\">\n                           <div class=\"card-body\">\n                             <h5 class=\"card-title\">").concat(x + 1, "  ").concat(comingapi[x].name.common, "</h5>\n                           </div>\n                         </div>\n                       </div>");
        }
        var ol = document.querySelector("ol");
        ol.innerHTML = li;
        // console.log(comingapi[0].capital[0]);
    });
};
btn1.onclick = function () {
    countStart = 0;
    countEnd = 50;
    countryList();
};
btn2.onclick = function () {
    countStart = 50;
    countEnd = 100;
    countryList();
};
btn3.onclick = function () {
    countStart = 100;
    countEnd = 150;
    countryList();
};
btn4.onclick = function () {
    countStart = 150;
    countEnd = 200;
    countryList();
};
btn5.onclick = function () {
    countStart = 200;
    countEnd = 250;
    countryList();
};
countryList();
console.log(btn1);
