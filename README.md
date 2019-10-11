## Backend Installation

```bash
$ cd ./backend
$ npm install
```


## Backend environments

```bash
# cd ./backend
$ create .env file in backend folder based on .env.example
```

## Running the backend

```bash
# watch mode. Backend is available on the "http://localhost:[port]/graphql"
# cd ./backend
$ npm run start:dev
```


## Frontend Installation

```bash
$ cd ./frontend
$ npm install
```


## Frontend environments

```bash
# cd ./frontend/src
$ create .env.ts file in frontend/src folder based on .env.example.ts
```

## Running the frontend

```bash
# watch mode. Frontend is available on the "http://localhost:[port]/graphql"
# cd ./frontend
$ ionic serve
```

## Building the frontend

```bash
# cd ./frontend
$ ionic build --prod
```

## Building the android 

```bash
# cd ./frontend
$ ionic build --prod
$ ionic cap add android
```
Open the android folder in Android Studio, build the apk file.

## Building the iOS 

```bash
# cd ./frontend
$ ionic build --prod
$ ionic cap add ios
```
Open the ios folder in Xcode.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
