import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const server = express();
/**
*  静态服务器
*	以 /static 开头
*/
server.use('/static', express.static('public'));

server.use(bodyParser.json());

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule,<any>server);
	await app.listen(3000);
}
bootstrap();
