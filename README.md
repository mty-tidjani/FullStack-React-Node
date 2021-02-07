# FullStack Node/React
My starter project for Node/React apps. Hope you came accross this when I'm very advanced. 😅😅 

## Stack

 1. NodeJs
 2. Typescript
 3. MongoDB
 4. Mongo
 5. Express

## Start project
1 - Clone project

    $  git clone https://github.com/mty-tidjani/File-api-service.git 

2 - Run client and server (seperately)

    $  cd ./client && yarn && yarn start
    $  cd ./server && yarn && yarn start

or Start dev.

    $  ./startscript.sh 
3 - Run Test or check code

4 - Build/Deploy

    $  docker-compose up

 **Major packages used**

**Frontent**
 1. @wojtekmaj/enzyme-adapter-react-17 // Experimental enzyme adapter for react 17 (While waiting the official packeg)
 2. enzyme // React testing utility
 3. immer // Used to mutate redux state easilly
 4. node-sass // support for .scss and .sass
 5. reactstrap // react bootstrap package for react
 6. husky // Pre-commit/Pre-push hook. Used to set some instruction (testing, linting or formating) just before git push or git commit
 7. prettier // code formatter 

 
**Backend**
 1. express-validator // Validations
 2. eslint // Linting (AirBnB config)
 3. jsonwebtoken // JWT
 4. morgan // Request logging
 5. winston // App logging
 6. jest // Testing
