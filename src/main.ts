import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

const instance = express();
instance.use(bodyParser.json());

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule,<any>instance);
	await app.listen(3000);
}
bootstrap();
