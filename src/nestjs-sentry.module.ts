import { Module } from '@nestjs/common';
import { NestjsSentryService } from './nestjs-sentry.service';

@Module({
  providers: [NestjsSentryService],
  exports: [NestjsSentryService],
})
export class NestjsSentryModule {}
