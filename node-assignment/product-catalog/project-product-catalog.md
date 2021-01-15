## How to run the server for the project
1. Install [Node.js](https://nodejs.org/en/) - install either of 8.x.x or 9.x.x versions.
2. From the command line run ```npm install -g json-server```. This install a web servers - we shall use json-server to start the supplied backend (within server/ folder)
3. Again, from the command line, go to the server folder and run ```npm install```. 
4. Now go to the server/ folder and run ```npm run json:server``` to start the server
5. You can now access the server from the browser by visiting ```http://localhost:4201/```

## Installing and using Postman app to test backend APIs
The browser can be used to test only HTTP GET requests (by entering the API URL in the address bar and fetching data). To test out other HTTP requests (POST, PUT, DELETE etc.), you need a tool like Postman.

To install Postman app, go to [the Postman site](https://www.getpostman.com/) and download the desktop app for your platform. Execute the API request and get the response. An example for a GET request is shown below. It returns the list of all products (a JSON array of objects).
![alt Making a GET request with Postman app](images/postman-1.png)  

To make a POST or PUT request you need to supply data in the request body. The backend server accepts and returns data in JSON format. To send data, you need to select POST instead of GET. Then click "Body" tab -> then "raw" -> then from the "Text" tab select "application/json". In the body enter the details of a new product as a JSON object (keys will need to be double-quoted) and send the request. If everything is entered fine you will have a new product added to the database (make sure to give a unique "id" for the product). Try to fetch products again (GET request) and verify it has been added. Below is a screenshot of the POST request.
![alt Making a POST request with Postman app](images/postman-2.png)

This way you can test rest of the APIs.

## API endpoints used in the project
THe backend server provides all APIs to work with fetching, adding, editing and removing products, product reviews and feedback. The ones we will use in the application are mentioned below.

* Fetching all products  
```
GET http://localhost:4201/products
```  

* Fetching reviews for a product with given id - to fetch the reviews for a product with id 1, use
```
GET http://localhost:4201/products/1/reviews
```
Change with product id with the id of the product you are looking to fetch reviews for.  

* Adding a review to a product - to add a review for a product with id 2, use
```
POST http://localhost:4201/reviews
```
In the request body supply a JSON object with keys - "productId" (in this case with value 2), "reviewer", "title", and "text". The first has number value, whereas the last three keys have string values.  

## The product catalog application
You need to build the front-end for a product catalog application as shown below.
![alt Product catalog application](images/product-catalog-app-screenshot-1.png)
When the page loads, the table should be populated with the list of products fetched from the backend via an Ajax call. When user selects a particular product by clicking on the product row, the review for the product should be fetched and displayed in the reviews list section (right bottom) - again fetched via an appropriate Ajax call. Finally, the user can enter a review via the form (top right) and submit it. This should trigger an Ajax call to add a review for selected product. Once the call has successfully added a product, the review should be added to the reviews list too.

