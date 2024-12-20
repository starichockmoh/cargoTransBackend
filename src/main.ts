import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import * as fs from 'node:fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  // const test = {};
  // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // // @ts-expect-error
  // console.log(test.aboba.aboba);
  await app.listen(3005);
}

function updateErrorJson(message: string) {
  const data = JSON.parse(
    fs.readFileSync('/var/www/ssz-status/index.json', 'utf8'),
  );
  const apiDowntimes = data.services[0].uptime;
  apiDowntimes.shift();
  apiDowntimes.push({
    status: 'error',
    date:
      new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
    message,
  });
  data.services[0].uptime = apiDowntimes;
  fs.writeFileSync('/var/www/ssz-status/index.json', JSON.stringify(data));
}

process.on('SIGINT', () => {
  updateErrorJson('SIGINT');
});
process.on('SIGUSR1', () => {
  updateErrorJson('SIGUSR1');
});
process.on('SIGUSR2', () => {
  updateErrorJson('SIGUSR2');
});
process.on('uncaughtException', () => {
  updateErrorJson('uncaughtException');
});
process.on('unhandledRejection', () => {
  updateErrorJson('unhandledRejection');
});
process.on('exit', () => {
  updateErrorJson('exit');
});
process.on('beforeExit', () => {
  updateErrorJson('beforeExit');
});
process.on('disconnect', () => {
  updateErrorJson('disconnect');
});
process.on('SIGTERM', () => {
  updateErrorJson('SIGTERM');
});

bootstrap();
