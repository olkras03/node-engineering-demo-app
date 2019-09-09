# ProductsApp

ProductsApp is web service created using the [Express](https://expressjs.com/) framework and [Mongoose](https://mongoosejs.com/).

### Set up

1. Fork this repo to the account of one team member
2. Add the other team members as collaborators and clone it to each machine
3. Do `brew install npm` to get Node Package Manager
4. `cd` into the directory for this project and do `npm install` to install all the dependencies listed in `package.json`
5. Do `node app.js` to fire up the app!
6. Go to `localhost:1234/products/test` to confirm that the application is running correctly
7. Sign up for the free tier of [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/)
8. Create a new cluster on the free tier by following the prompts
9. When set up is complete, connect your application to the cluster by clicking on `connect` and following the prompts
10. Use [Postman](https://www.getpostman.com/downloads/) to create new products using `post` requests
11. Use [Postman](https://www.getpostman.com/downloads/) to read entries from the DB using `get` requests

### Skills Checklist

- [ ] I can understand how data is sent from Postman and returned from the server
- [ ] I understand how data is sent from the server to the DB and back
- [ ] I can add tests which cover the existing endpoints
- [ ] I can TDD a new endpoint that lists _all_ products
- [ ] I can adapt the application to use Pug templates

#### Resources

* [Express](https://expressjs.com/)
* [Mongoose](https://mongoosejs.com/)
* [Pug](https://pugjs.org/api/getting-started.html) templates
* [Jest] for unit tests
* [Cypress](https://www.cypress.io/) for feature tests
