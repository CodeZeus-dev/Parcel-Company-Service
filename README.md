# Parcel-Company-Service

This project is an API service for a Parcel Company. The user is able to make API calls via HTTP and accomplish the following:

1. Create a truck
2. Load and Unload a truck with parcels as requested
3. Get the number of parcels in each truck
4. Get the weight of the truck
5. Define a parcel's weight upon creation
6. Remove a parcel from a truck

The service runs in Node.js and Express.js and the data retrieved from HTTP transactions are stored in memory. Unit and API Integration testing has been implemented using Jest.

## How to use

In order to test the API,

1. Clone the repository
2. Run npm install
3. Start the server by running server.js with node
4. Use Postman to test the API Endpoints
   1. "/trucks"
      1. GET
      2. POST
   2. "/trucks/:id"
      1. GET
   3. "/trucks/:id/add"
      1. POST
   4. "/trucks/:id/remove/:parcelId"
      1. DELETE

## Testing the API with Postman

[Parcel Service API Testing](https://drive.google.com/file/d/1IF46nVU3KNV4gLCbuUqrZAdPI3HqwZca/view?usp=sharing)
