const apiKey = "";
const tasksList = document.querySelector("#weather_info");
const waitDiv = document.createElement("div");
waitDiv.innerHTML = "fetching data...please wait"

//Creating div to add weather info
const createDivWithContent = (title,content) => {
  const main = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  div1.innerHTML = title;
  div2.innerHTML = content;
  main.appendChild(div1);
  main.appendChild(div2);
  return main;
};

//Clears previous data --> adds div to tell users to wait --> gets lat and lon from geolocation API --> fetches weather info
//Function that is being called when users click on button
const getCurrentLocation = () => {
  //Clear previous data when button is clicked
  while(tasksList.firstChild){
    tasksList.firstChild.remove()
  }
  tasksList.appendChild(waitDiv);
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    getWeatherByCurrentLocation(lat, lon);
  });
};

//async await to fetch weather info.
//when it is done fetching it adds info to DOM.
const getWeatherByCurrentLocation = async (lat, lon) => {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  let data = await response.json();
  const city_name = createDivWithContent("City",data?.name);
  const temp = createDivWithContent("Temp",data?.main?.temp);
  const min_temp = createDivWithContent("Min Temp",data?.main?.temp_min);
  const max_temp = createDivWithContent("Max Temp",data?.main?.temp_max);
  const dataList = [city_name, temp, min_temp, max_temp];
  tasksList.firstChild.remove()
  dataList.forEach((currentData) => {
    currentData.className = "newItem"
    tasksList.appendChild(currentData);
  });
};

