# nodejs-pokedex-backend

## About

This project is a pokedex REST API.

### Technologies

- REST API - Created with NodeJs and ExpressJS
- DB - The data is stored with MongoDB
- Architecture - Based on the clean architecture model

The api has 2 entrypoints

- `api/v1/pokemon` - lists all the pokemons
- `api/v1/pokemon/:id` - shows an information about the pokemon based on the given id

## Usage

### Requirements

- NodeJS version >= 14.18.0

### Installation

```
git clone https://github.com/SayWut/nodejs-pokedex-backend
npm install
npm start
```

To run in dev mode use `npm run dev` instead of `npm start`
