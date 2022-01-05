# nodejs-pokedex-backend

## About

This project is the backend of the pokedex project. The backend is a REST API

[The frontend of the project](https://github.com/SayWut/flutter-pokedex-frontend)

### Technologies

- REST API - Created with NodeJs and ExpressJS
- DB - The data is stored with MongoDB
- Architecture - Based on the clean architecture model

## Entrypoints

### Pokemons api

| Name              | Method | Description            |
| ----------------- | ------ | ---------------------- |
| `api/v1/pokemons` | GET    | lists all the pokemons |

### Parameters

| Name   | Data Type | Required / Optional | Description                                                                |
| ------ | --------- | ------------------- | -------------------------------------------------------------------------- |
| offset | Integer   | Optional            | Offset the list of returned pokemons results by this number; defaults is 0 |
| limit  | Integer   | Optional            | Number of pokemons to retrieve; defaults is 20                             |
| search | String    | Optional            | lets you search for a pokemon by name                                      |

### Pokemon detail api

| Name                    | Method | Description                                                    |
| ----------------------- | ------ | -------------------------------------------------------------- |
| `api/v1/pokemons/:name` | GET    | shows an information about the pokemon based on the given name |

### Evolution api

| Name                             | Method | Description                           |
| -------------------------------- | ------ | ------------------------------------- |
| `api/v1/evolutions/:evolutionId` | GET    | retrive the pokemon's evolution by id |

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
