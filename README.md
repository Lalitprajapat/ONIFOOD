this app was created to understand swiggy's UI data layer for restaurant details and dynamic routing 

# 🍔 Swiggy Clone – Online Food Ordering App

A real-time online food ordering web application that mimics the core functionalities of Swiggy. Built using React.js and Redux, it fetches live restaurant and menu data using the Swiggy API and offers a smooth, responsive user experience.

---

## 🚀 Features

- 🔄 **Real-time Restaurant & Menu Data**  
  Fetches live data from Swiggy’s API to display up-to-date restaurant lists and menus.

- 🧠 **Swiggy UI Data Layer Integration**  
  Parsed dynamic Swiggy API responses, converting input into structured JSON to extract restaurant details, categorized menus, and pricing.

- 🛒 **Cart Functionality with Redux**  
  - Add/remove dishes to/from cart
  - Real-time quantity and price updates
  - Persistent cart state across routes

- 🧭 **Routing with React Router**  
  - Homepage (restaurant list)  
  - Restaurant-specific menu pages  
  - Cart page with selected items

- 📱 **Responsive UI**  
  Designed for smooth performance on both desktop and mobile devices.

- ⚠️ **Error & Loading State Handling**  
  Custom loaders and graceful fallback UI for API errors or empty states.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript, HTML, CSS, Tailwind CSS 
- **State Management**: Redux Toolkit  
- **Routing**: React Router DOM  
- **API**: Swiggy (unofficial/public API)  

---

## 📂 Folder Structure
│
└───src
    │   App.js
    │
    ├───components
    │       About.js
    │       Body.js
    │       Cart.js
    │       Contact.js
    │       ErrorComp.js
    │       Header.js
    │       ItemList.js
    │       RestauMenu.js
    │       RestCard.js
    │       RestCategory.js
    │       Shimmer.js
    │       User.js
    │       UserClass.js
    │
    └───utils
            appStore.js
            cartSlice.js
            constants.js
            useOnline.js
            UserContext.js
            useResataurantMenu.js
