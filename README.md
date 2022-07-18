<div align="center">

  <img src="https://www.freeiconspng.com/uploads/lock-icon-png-10.png" alt="Logo" width="150">
  
  <h3 align="center">
     Password and encryption manager 
  </h3>
    <br />
  
  <div align="center">

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white&style=for-the-badge)
  ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?logo=vuedotjs&logoColor=%234FC08D&style=for-the-badge)
  ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&logoColor=white&style=for-the-badge)
   
  ![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

  </div>
  
</div>

## Summary

  - The purpose of the app is to store sensitive data, like online account credentials, secure notes, document numbers, etc
  - The data is server-side encrypted and decrypted via the API
  - The supported item models are:
    - `Credentials` - username, password and url for a website
    - `Notes` - simple encrypted text notes
    - `Cards` - credit or debit card information
    - `Wifi` - wifi network name and password
    - `Documents` - personal document numbers

## What I Learned
  
  - The fundamentals of Vue 3
  - Composition API, setup function, refs and reactivity, events
  - Slots and templates, provide/inject, suspense API, dynamic routing

  - More Prisma [data modeling features](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)
  - Issues of response and error handling consistency when scaling an API 🥲

## :rocket: Routes

- The default responses are:
  - `200` - Successful GET request
  - `201` - Successful POST request
  - `204` - Successful DELETE request
  - `401` - Auth errors
  - `404` - Resource not found 
  - `409` - Resource conflict on POST requests
  - `422` - Body validation error on POST requests

### Auth

```yml
POST /signup
    - Route for creating a new user
    - body:{
        "email": "jon@doe.com",
        "password": "DonJoe27"
      }
    - response: {"token": "JWT_TOKEN"}
```

```yml
POST /signin
    - Route for signing an existing user
    - body:{
        "email": "jon@doe.com",
        "password": "DonJoe27"
    }
    - Response: {"token": JWT_TOKEN}
```
    
```yml 
POST /auth/check
    - Route for validating cached jwt tokens
    - headers: {"Authorization": "Bearer TOKEN"}
```
    
### Credentials

```yml 
POST /credentials
    - Route for creating new encrypted credential
    - headers: {"Authorization": "Bearer TOKEN"}
    - body: {
        "title": "Website account",
        "email": "jon@doe.com",
        "password": "DonJoe27",
        "url": "http://website.com"
    }
```

```yml
GET /credentials
    - Route for finding all user credentials
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: array of credentials
``` 

```yml
GET /credentials/:id
    - Route for finding one user credential
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: credential
``` 

```yml
DELETE /credentials/:id
    - Route for deleting one user credential
    - headers: {"Authorization": "Bearer TOKEN"}
``` 

### Notes

```yml 
POST /notes
    - Route for creating new encrypted note
    - headers: {"Authorization": "Bearer TOKEN"}
    - body: {
        "title": "My important note",
        "content": "Important things to store",
    }
```

```yml
GET /notes
    - Route for finding all user notes
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: array of notes
``` 

```yml
GET /notes/:id
    - Route for finding one user note
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: note
``` 

```yml
DELETE /notes/:id
    - Route for deleting one user note
    - headers: {"Authorization": "Bearer TOKEN"}
``` 

### Cards

```yml 
POST /cards
    - Route for creating new encrypted card
    - headers: {"Authorization": "Bearer TOKEN"}
    - body: {
        "title": "Mustercard credit",
        "number": "1234 5678 8765 4321",
        "cardholderName": "Jon Doe Full Name Jr",
        "securityCode": "123",
        "expirationDate": "07/28",
        "password": "1234",
        "type": "CREDIT | DEBIT"
    }
```

```yml
GET /cards
    - Route for finding all user cards
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: array of cards
``` 

```yml
GET /cards/:id
    - Route for finding one user card
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: card
``` 

```yml
DELETE /cards/:id
    - Route for deleting one user card
    - headers: {"Authorization": "Bearer TOKEN"}
``` 

### Wifi

```yml 
POST /wifi
    - Route for creating new encrypted wifi
    - headers: {"Authorization": "Bearer TOKEN"}
    - body: {
        "title": "Home network",
        "network": "network2.4",
        "password": "password123",
    }
```

```yml
GET /wifi
    - Route for finding all user wifi
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: array of wifi
``` 

```yml
GET /wifi/:id
    - Route for finding one user wifi
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: wifi
``` 

```yml
DELETE /wifi/:id
    - Route for deleting one user wifi
    - headers: {"Authorization": "Bearer TOKEN"}
``` 

### Documents

```yml 
POST /docs
    - Route for creating new encrypted documents
    - headers: {"Authorization": "Bearer TOKEN"}
    - body: {
        "title": "Home network",
        "network": "network2.4",
        "password": "password123",
    }
```

```yml
GET /docs
    - Route for finding all user documents
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: array of docs
``` 

```yml
GET /docs/:id
    - Route for finding one user documents
    - headers: {"Authorization": "Bearer TOKEN"}
    - Response: document
``` 

```yml
DELETE /docs/:id
    - Route for deleting one user documents
    - headers: {"Authorization": "Bearer TOKEN"}
``` 
