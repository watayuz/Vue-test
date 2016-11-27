'use strict';

const Koa = require('koa');
// import Koa from 'koa';
const app = Koa();

const PORT = process.env.port || 8080;

app.use(function* () {
	this.body = 'hello';
});

app.listen(PORT, () => {
	console.log('run at ' + PORT);
});