import { Test, TestingModule } from '@nestjs/testing';
import { NestjsSentryService } from './nestjs-sentry.service';

describe('NestjsSentryService', () => {
  let service: NestjsSentryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsSentryService],
    }).compile();

    service = module.get<NestjsSentryService>(NestjsSentryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
