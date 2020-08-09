import { Module } from '@nestjs/common';
import { EsService } from './es.service';

@Module({
  providers: [EsService]
})
export class EsModule {}
