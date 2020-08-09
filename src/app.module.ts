import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MagentoModule } from './magento/magento.module';
import { EventBusModule } from './event-bus/event-bus.module';
import { I18nModule } from './i18n/i18n.module';
import { ConfigModule } from './config/config.module';
import { EsModule } from './es/es.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    AuthModule,
    MagentoModule,
    EventBusModule,
    I18nModule,
    ConfigModule,
    EsModule,
    GraphQLModule.forRoot({}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
