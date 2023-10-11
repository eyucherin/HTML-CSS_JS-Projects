<details>
 <summary><b>Day1:To Do List</b></summary>
 
  - **Basic DOM manipulation**
    - createElement
    - removeChild
    - appendChild
  - **Using Forms**
    - When a form is submitted, the page will re-render. To stop this from happening, call `event.preventDefault()` in the event handler.
</details>

<details>
  <summary><b>Day2:Weather App</b></summary>

- **fetching Open Weather API**
  - [API DOC](https://openweathermap.org/current)
- **Geolocation API**
  - ```
    navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    })
    ```
- **Basic DOM manipulation**
  - firstChild

</details>

<details>
  <summary><b>Day3:Tabs</b></summary>

- **Basic DOM manipulation**
  - querySelectorAll
- **this keyword in HTML**
  - `this` in html will pass the element itself as an argument to the function.
- **CSS keframes** - animating your css. - call this in css class.
</details>

<details>
  <summary><b>Day4:Typing Game</b></summary>

- **event Handler**
  - use onkey up to see the whole change, on key down will print previous change.
- **Built in Javascript async Function** - setInterval - setTimeout
</details>

<details>
  <summary><b>Day5:Loading Animation</b></summary>
    
   - **CSS keyframes**
     - using keyframes to animate the loading bar.
     - in keyframe, we change the width.
     - adding this to style that deals with color.
</details>

<details>
  <summary><b>Day6:Hiding User</b></summary>
    
   - **CSS keyframes**
     - using keyframes to animate the the profile card.
  - **event Handler**
    - ```btn.addEventListener("click")```
    - yet another way to add event listener. 
    - this is different than passing the function straight to the element. 
  - **adding css straight from javascript**
    - ```profileCard.style.animation = ""```
  - **using font awesome**
    - official font-awesome [Docs]("https://fontawesome.com/")

</details>

<details>
  <summary><b>Day7:Cursor Pointer</b></summary>
    
 - **Using grid in CSS**
    - make separate grid container and grid item. 
    - Docs can be found [here]("https://www.w3schools.com/css/css_grid_item.asp)

- **Javascript Logic** 
    - Incorrect `508 < e.screenX < 1006` - Correct `508 < e.screenX && e.screenX < 1006`

- **Finding mouse pointer position**
  - `document.addEventListener("mousemove"`

</details>

<details>
  <summary><b>Day8:Theme Changer</b></summary>
  
 - **Nothing new but interesting project**

</details>

<details>
 <summary><b>Day9:Understanding Margin Collapse</b></summary>
 
  - **CSS basic --> Margin Collapse** 
    - 
</details>