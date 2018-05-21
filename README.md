# Modular Website

To create a skeleton for all future websites.

## Authors

* ** Vincent Kesumo **

### Prerequisites

Most features will be made modular however due to comfort reasons I will use PostgreSQL as the database management system.
In this sense Postgres will need to be installed before hand.

### Installing

Install the modules

```
$ npm install
```
Configure your database through the config folder by creating the config.json file

> You may look at config.json.example for reference

Start nodemon

```
$ nodemon src/app
```

Optionally fill the database with initial data

```
$ sequelize db:seed:all
```
