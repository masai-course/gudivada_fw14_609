1. Create an Express Server and Deploy it on port `8000`.
2. Create following API's on the server.
   - GET `/` returns [HTML file](./src/assets/users.html).
   - GET `/users` returns a [JSON file](./src/assets/user.json)
   - GET `/users/:id`, matches id from [user.json file](./src/assets/user.json) and returns an Object.
   - POST `/users` updates the [user.json file](./src/assets/user.json) and add new user to it.
