# demo-hotel-app

## Summary
This package contains a demo React app for Hotel booking built using Preact.

***Very minimal to no use of external libraries.***

## CORS handling
To workaroud the issue of CORS, a middleware proxy(CORS Anywhere) is used when calling the APIs.

This proxy acts as a middleman between the client and the target server.

Instead of calling the API directly, the app calls the proxy server which in turn calls the target API with the required origin headers that are required by the target server.

As this service is very popular, the developer has put some restrictions on its usage. To enable it, the user has to visit [the service page](https://cors-anywhere.herokuapp.com/corsdemo) and enable it for their local browser.

## Installation and running

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm test
```

.
