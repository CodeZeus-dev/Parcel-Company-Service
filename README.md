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

> Make sure to use raw and JSON in the body of the POST requests

## Testing the API with Postman

[Parcel Service API Testing](https://drive.google.com/file/d/1IF46nVU3KNV4gLCbuUqrZAdPI3HqwZca/view?usp=sharing)

GET "/trucks"

<img width="1792" alt="Screenshot 2021-06-29 at 15 20 43" src="https://user-images.githubusercontent.com/65397514/123815028-0f926300-d8ee-11eb-9eed-9abe5cf57b81.png">

GET "/trucks/:id"

<img width="1792" alt="Screenshot 2021-06-29 at 15 20 51" src="https://user-images.githubusercontent.com/65397514/123815018-0dc89f80-d8ee-11eb-8967-d1368d46e27c.png">

POST "/trucks"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 03" src="https://user-images.githubusercontent.com/65397514/123815007-0b664580-d8ee-11eb-8ebc-e9f7d49741b5.png">

GET "/trucks"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 11" src="https://user-images.githubusercontent.com/65397514/123814990-0903eb80-d8ee-11eb-9183-7a6dcb681b7a.png">

POST "/trucks/:id/add"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 29" src="https://user-images.githubusercontent.com/65397514/123814975-06a19180-d8ee-11eb-9c21-f0e94ad30925.png">

GET "/trucks"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 36" src="https://user-images.githubusercontent.com/65397514/123814963-043f3780-d8ee-11eb-9182-1e5b0bf421be.png">

GET "/trucks/:id"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 42" src="https://user-images.githubusercontent.com/65397514/123814949-01444700-d8ee-11eb-8ad9-3299a3decfa2.png">

DELETE "/trucks/:id/remove/:parcelId"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 50" src="https://user-images.githubusercontent.com/65397514/123814919-fee1ed00-d8ed-11eb-952b-d7e9cf25a7f8.png">

GET "/trucks/:id"

<img width="1792" alt="Screenshot 2021-06-29 at 15 21 58" src="https://user-images.githubusercontent.com/65397514/123814904-fc7f9300-d8ed-11eb-8935-096879dba034.png">

GET "/trucks/"

<img width="1792" alt="Screenshot 2021-06-29 at 15 22 05" src="https://user-images.githubusercontent.com/65397514/123814892-f984a280-d8ed-11eb-8138-4e93e837f7eb.png">
