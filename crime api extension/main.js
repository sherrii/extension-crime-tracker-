function cachingArray(data) {
  const cacheArr = [];

  for (let i = 0; i < data.length; i++) {
    cacheArr.push(data[i]["arrest_date"]);
  }
  return cacheArr;
}

function caching(arr) {
  const cache = {};
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i < arr.length; i++) {
    const dateString = arr[i];
    const date = new Date(dateString);
    const monthNumber = date.getMonth();
    const monthName = monthNames[monthNumber];
    if (!cache[monthName]) {
      cache[monthName] = 1;
    } else {
      cache[monthName]++;
    }
  }
  return cache;
}

document.addEventListener("DOMContentLoaded", function fetcher() {
  const title = document.createElement("h1");
  title.innerText = "Crime Tracker";
  document.querySelector("body").appendChild(title);
  const url = "https://data.cityofnewyork.us/resource/uip8-fykc.json";
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      // console.log(data); // data succesfully fetched
      // iterate over data and
      let storage = caching(cachingArray(data));
      console.log(storage);
      // console.log(data[index]);
      // create another container for each message
      for (const key in storage) {
        let temp = document.createElement("article");
        temp.innerHTML = `<span class="month">${key}</span> : <span class="occurence" style="color:red">${storage[key]}</span> cases`;
        document.body.appendChild(temp);
      }
    });
});
