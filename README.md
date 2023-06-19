In this project I have build a **Tasty Kitchens App**(Zomato Clone). 

I have created an app that will fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.

**Functionalities that are added**
The app has the following functionalities

**Login Route**

Users should be able to login to their account by entering a valid username and password.
Users should be able to navigate to Home, Cart routes using links in Navbar.
When the data is being fetched then the Loading view should be displayed to the user.
Users should be able to view the website responsively in mobile view, tablet view as well.

**Home Route**

Navbar should contain the application title with logo, Home, Cart, and Logout button.
Users should be able to navigate to Home route when clicking on TASTY KITCHENS logo.
Users should be able to see carousel images with its offer details.
Users should be able to see Popular Restaurants.
Users should be able to see the sort by icon as shown in the Figma.
The default value for the Sort By filter should be Lowest (You can use the sortByOptions object from the path src/App.js).
Users should be able to select the sort by icon and able to see the Popular Restaurants based on the Highest and Lowest Ratings.
Users should be able to sort the list of Restaurants based on their ratings.
When user clicked the Lowest the Restaurants list should be displayed in Lowest ratings to Highest ratings.
When user clicked the Highest the Restaurants list should be displayed in Highest ratings to Lowest ratings.
Users can browse popular Restaurants using pagination buttons.
Users should be able to see the footer as shown in Figma.
Users should be able to see Home with highlighted text in Navbar.

**Specific Restaurant details Route**

When users click a restaurant in a particular list, it should open a new page with respective restaurant details.
Users should be able to see food items list as shown in the figma screens.

**Cart Route**

Users should be able to select the Cart link in the navbar and be able to view their selected Food items, each food item quantity, and price of each food item in a separate page.
Users should be able to increase or decrease their each food item quantity and price should increase or decrease appropriately.
Users should be able to see their order total as shown in figma.
Users should be able to see the footer as shown in figma.
Users should be able to see Cart with highlighted text in Navbar.
Users should be able to see Cart Items even after the app is refreshed, store the data in Local Storage.

**Logout Button**

Users should be able to logout from accounts page.

**additional functionality :**

When the data is being fetched then the Loading view should be displayed to the user in all Routes.
Users should be able to view the website responsively in mobile view, tablet view as well.
When the users enter invalid route in the URL then the Page not found Route should be displayed.
