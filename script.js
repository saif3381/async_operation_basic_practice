// // "use strict";

// // const btn = document.querySelector(".btn-country");
// // const countriesContainer = document.querySelector(".countries");
// // // ("use strict")

// // // const btn = document.querySelector(".btn-country");
// // // const countriesContainer = document.querySelector(".countries");

// // const renderCountry = function (data, className = "") {
// //   const html = `
// //   <article class="country ${className}">
// //     <img class="country__img" src="${data.flag}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span></span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} people</p>
// //       <p class="country__row"><span></span>${data.languages[0].name}</p>
// //       <p class="country__row"><span></span>${data.currencies[0].name}</p>
// //     </div>
// //   </article>
// //   `;
// //   countriesContainer.insertAdjacentHTML("beforeend", html);
// //   countriesContainer.style.opacity = 1;
// // };

// // const renderError = function (msg) {
// //   countriesContainer.insertAdjacentText("beforeend", msg);
// //   countriesContainer.style.opacity = 1;
// // };

// // const getJSON = function (url, errorMsg = "Something went wrong") {
// //   return fetch(url).then((response) => {
// //     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

// //     return response.json();
// //   });
// // };

// // ///////////////////////////////////////
// // // Our First AJAX Call: XMLHttpRequest

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener("load", function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //   <article class="country">
// //     <img class="country__img" src="${data.flag}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span></span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} people</p>
// //       <p class="country__row"><span></span>${data.languages[0].name}</p>
// //       <p class="country__row"><span></span>${data.currencies[0].name}</p>
// //     </div>
// //   </article>
// //   `;
// //     countriesContainer.insertAdjacentHTML("beforeend", html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// // getCountryData("pakistan");
// // getCountryData("usa");
// // getCountryData("germany");

// // // code challenge 1

// // const whereAmI = function (lat, lon) {
// //     fetch(``).then(res => {
// //         if (!res.ok) throw new Error=(`problem with geocoding${res.status}`);
// //         return res.json();
// //     }).then(data=> {
// //         console.log(data);
// //         console.log(`ypu are in ${data.city} , ${data.country}`);
// //         return fetch(``);

// //     }).then(response => {
// //         if (!response.ok) throw new Error =(`country not found(${response.status})`);
// //         return response.json();
// //     }).then(data => renderCountry(data, 'neighbour'))
// //     .catch(err => console.log(`${err.message}`));
// // };

// // callback and microtask queuecos

// // console.log("start here");
// // setTimeout(() => console.log("0 sec timer"), 0);
// // Promise.resolve("resolved promise 1").then((res) => {
// //   console.log(res);
// // });
// // console.log("test end ");

// // promises
// const LotteryPromise = new Promise(function (resolve, reject) {
//   console.log("lottery Draw is happening ");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("you win");
//     } else {
//       reject(new Error(" you lost your money"));
//     }
//   }, 2000);
// });
// LotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// // race() method      return first settled promise
// (async function () {
//   const res = await Promise.race([getJSON(``), getJSON(``), getJSON(``)]);

//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(""));
//     }, sec);
//   });
// };

// Promise.race([getJSON(``), timeout(1)])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err));

// //allsettled()             all  settled promise returned not ignore the rejected promises

// Promise.allSettled([
//   Promise.resolve("succes"),
//   Promise.reject("reject"),
//   Promise.resolve("succes"),
// ]);

// //promise.any()

// Promise.any([
//   Promise.resolve("succes"),
//   Promise.reject("reject"),
//   Promise.resolve("succes"),
// ]);
