# CALCULATOR V1

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#Setup)
- [Screenshots](#screenshots)
- [Author](#author)

## Getting Started

Before starting to install the project, there're some things that need to be done first.

### Prerequisites

Make sure all of these are properly installed in your system.

| Application  | Download                                                                            |
| ------------ | ----------------------------------------------------------------------------------- |
| Git          | [Windows](https://gitforwindows.org/) / [Linux](https://git-scm.com/download/linux) |
| Node.js      | [Link](https://nodejs.org/en/download/)                                             |
| MongoDB      | [Link](https://www.mongodb.com/try/download community)                              |
| Composer     | [Link](https://getcomposer.org/)                                                    |

### Installation

First, clone this repository into your system.

```
git clone https://github.com/ahmadkhairul/calculator-app.git
```

Then, install all the packages that described in all `package.json` for every folder.

```
npm install
```

### Setup

first, set up calculator-server. make sure install MongoDB. Then run `npm run seed` and run `npm start` in `calculator-api` folder.
second, set up calculator-client. go to calculator folder. Then run `npm start`. To use the app `localhost:3000` will automatically opened if not you can visit by yourself.
third, there are 2 user available to use, you can always add more user via `seeder.js` file on `calculator-api` folder and then do `npm run seed`.

```
1. username: ahmad, password: 12345
2. username: khairul, password: 54321
```

fourth, set up visitor-chart. make sure composer installed and [mongoDB Driver installed on PHP](https://www.opentechguides.com/how-to/article/php/114/laravel-mongodb-config.html), open `visitor-chart` folder and run `php artisan serve`. To use the app `localhost:8000` will automatically opened if not you can visit by yourself.

## Screenshots

<img src="ss.jpg" />
<img src="ss-2.jpg" />

## Author

**Ahmad Khairul Anwar** - [Ahmad Khairul](https://github.com/ahmadkhairul)
