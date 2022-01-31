MERN STACK DEVELOPER INTERN
ASSIGNMENT


Problem Statement
 A store named “ABC-e-store” is expanding its business and is scaling to 200 stores all over India from its current 100 stores. The company wants to sell it’s items to the consumers through an online e-commerce platform so that people can purchase items from any store and from any location in India. You are the lead developer working on this project. You have to design a Search functionality for the platform along with the database design. It is given that the platform should function in the following manner:
There should be a database for all the stores the company has with relevant information like- name, location, date of setup, no. of employees etc.
There should be a database for products which contains all the products the company has to offer in all of its stores collectively. Each product should belong to one or more of the stores. Remember two same products with different prices can only belong to two different stores.
After designing the database above, complete the following task -
 1. Based on the design given, you have to build a Search Widget in ReactJS. The widget should resemble the design given to you.
 2. When a user selects a location, and types in the Search Widget, it should show a dropdown of items which are fetched from the database (as discussed below):
3. Each search result item in the dropdown should have the following:
Product name- name of the product which matches the search query and the location as fetched from the database.
Availability and Average price- show the no. of stores in which the product is available and the average price it has in all the stores. For eg. if Product A belongs to two stores A and B, price in store A being 100/- and price in store B being 110/- , in this case the no. of stores would become 2 and the average price would be 105/-.

4. Note:- For the locations, you can use dummy data either by creating a sample database for it or you can even add static values to the dropdown which match with the locations of your stores in the database.
5. Explain which modules (packages) have you used to complete the above assignments and why? Please name an alternative to the ones you used.
Technology to be used
Database Schema - MongoDB
Frontend - ReactJS
Backend- NodeJS+ExpressJS
 How to submit the code?
Push the code to your GitHub Repository and share the link with us.


All the Best!

Packages

Backend 

- Mongoose

      It is an ODM (Object Data Mapping) library and which helps us to easily map our JSON database to a javascript object. 

      Alternative - MongoDb package (not an ODM but does the same end job od communicating to the database).

- Dotenv

      For setting up environment variables.

      Alternative - Not required as it does its job pretty well

- Cors 

      For configuring cors easily.

      Alternatives - Not required

- Nodemon (dev-dep)

      For hot reloads orelse the dev process gets very cumbersome.

      Alternatives - Forever is also good.


Frontend

- Axios 

      For easier API requests.

      Alternatives - JS Fetch API.


- React Select

      For beautiful looking select components as styling HTML select is not possible and making custom select would have taken a lot of time. Plus for the principle of DRY code. 

      Alternatives - MUI autocomplete or select could also be used.
