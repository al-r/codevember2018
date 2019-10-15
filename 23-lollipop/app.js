// var today = new Date();
// var month = today.getUTCMonth();
// var day = today.getUTCDate();

// var links = [
//     "E8gmARGvPlI",
//     "yXQViqx6GMY",
//     "itcMLwMEeMQ",
//     "Mk_GmhD053E",
//     "uIU4DfmAH4Y",
//     "mN7LW0Y00kE",
//     "w9QLn7gM-hY",
//     "hwacxSnc4tI",
//     "VQhuoY5h2kE",
//     "R8CBoVc_OMI",
//     "gFtb3EtjEic",
//     "g5Tru2YmXjk",
//     "RTtc2pM1boE",
//     "5Fmf3D9oNn4",
//     "tekN9NtGXOc",
//     "EvDxSW8mzvU",
//     "rJcJbVBwREc",
//     "prErnop1eiM",
//     "IbRtGMm96F8",
//     "V3EYjVPRClU",
//     "fu3uA8K6ApQ",
//     "z8Vfp48laS8",
//     "jnXxxKZ57Tw",
//     "uA4STm4hx7Q"
// ];

// getDailyLink = function(){
//     if(month === 10){
//         if(day <= 23){
//             for(i = 1; i <= day; i++) {
//                 // Allow to open
//                 var element = document.getElementById(i.toString());
//                 element.className += ' row-item__case--open';

//                 //Add link
//                 var att = document.createAttribute("href");
//                 att.value = "https://youtu.be/" + links[i-1];
//                 element.setAttributeNode(att); 
//             }

//             if(day===23) {
//                 var banner = document.createElement("div");
//                 banner.setAttribute("id", "christmas-banner");
//                 banner.innerHTML = "Merry Christmas";
//                 document.body.appendChild(banner);
//                 console.log(banner);
//             }
//         }
//     }
// };

// merryChristmas = function() {
//     if(month===10 && day===23){
//         document.getElementById("christmas-banner").className += " christmas-banner--in";
//     }
// }

// window.addEventListener('load', function() {
//     getDailyLink();
// });