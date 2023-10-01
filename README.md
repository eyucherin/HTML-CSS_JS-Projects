# HTML, CSS, & Javascript code-challenge :

### Day 1: To Do App

<details>
  <summary><b>What I learned</b></summary>
  
  - **Basic DOM manipulation**
    - createElement
    - removeChild
    - appendChild
  - **Using Forms**
    - When a form is submitted, the page will re-render. To stop this from happening, call `event.preventDefault()` in the event handler.
  
</details>


### Day 2: Weather App Using Open Weather API

<details>
  <summary><b>What I learned</b></summary>
  
  - **fetching Open Weather API**
    - [API DOC](https://openweathermap.org/current)
  - **Geolocation API**
    -   ```
        navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        })
        ```
  
</details>
