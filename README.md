# Be the Hero - Server

> API developed with Node, Express, Sqlite, Knex and Cors

Api developed during Omnistack Week, for the Be the Hero application, which will allow the registration of ONGs and cases that need external financial assistance, connecting donations and ONGs that need help.

![](./images/logo.svg)

## Instalação

Clone the project in a folder on your computer and then install the project's dependencies

```sh
git clone https://github.com/maxarouca/be_the_hero_server
npm install
```

## Running

The api will be available at http://localhost:3333

## Available routes

The following routes are available:

#### List Ongs - http://localhost:3333/ongs (GET)

Returns a list of all registered ONGs

#### Create Ongs - http://localhost:3333/ongs (POST)

Insert a new ONG in the database. A json is expected in the request body containing name, email, whatsapp, city, uf.

```js
{
	"name": "Irma Dulce",
	"email": "contato@irmadulce.org.br",
	"whatsapp": "71999998888",
	"city": "Salvador",
	"uf": "BA"
}

```

#### List Incidents - http://localhost:3333/incidents (GET)

Returns a list of all registered incidents

#### Create Incidents - http://localhost:3333/incidents (POST)

Insert a new ONG in the database. A json is expected in the request body containing title, description and value. In the request header, it is necessary to send the id of the ONG responsible for the case in the authorization field. This id can be obtained by listing the ONGs.

```js
{
	"title":"Cirurgia de Cancer",
	"description":"Realização de uam cirurgia de remoção de cancer",
	"value":"R$10.000,00"
}

```

#### Delete Incidents - http://localhost:3333/incidents/:id (DELETE)

In this endpoint we pass a parameter with the incident id that we want to exclude.

#### Profile - http://localhost:3333/profile (GET)

This endpoint lists all incidents related to a specific ONG. In the request header, it is necessary to send the id of the ONG responsible for the case in the authorization field. This id can be obtained by listing the ONGs.

#### Login - http://localhost:3333/sessions (POST)

This endpoint allows the login of an NGO registered on the platform using its id. A json is expected in the request body containing the id.

```js
{
	"id":"33664ada"
}

```

## Contributing

1. Fork it (<https://github.com/maxarouca/be_the_hero_server/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
