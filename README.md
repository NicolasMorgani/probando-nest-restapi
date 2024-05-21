

## Description

[Nest](https://github.com/NicolasMorgani/probando-nest-restapi) framework TypeScript starter repository.

## Installation

```bash
$ npm install
$ docker compose up -d
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```


## License

Nest is [MIT licensed](LICENSE).

## ¿Qué es un middleware y cuál es su utilidad en una aplicación backend?

Un middleware es un software que actúa como intermediario entre el cliente y el servidor en una aplicación backend, agregando funcionalidades compartidas para procesar solicitudes y respuestas.

## ¿Qué es SQL Injection y cómo puede evitarse? 

SQL Injection es una vulnerabilidad que permite a un atacante manipular consultas SQL. Puede evitarse mediante parámetros de consulta parametrizados y validación de entrada.

## ¿Cuándo es conveniente utilizar SQL Transactions? Dar un ejemplo.

Las transacciones SQL son útiles cuando se necesita garantizar la consistencia, aislamiento y durabilidad de un conjunto de operaciones.
como por ejemplo en el procesamiento de pedidos: Cuando se procesan pedidos en una tienda en línea, es crucial que la actualización del estado del pedido y la deducción del inventario se realicen de manera atómica.

## Usando async/await: ¿cómo se puede aprovechar el paralelismo?

Usando async/await, puedes aprovechar el paralelismo al ejecutar múltiples funciones asincrónicas simultáneamente, esperando sus resultados con await para optimizar el rendimiento