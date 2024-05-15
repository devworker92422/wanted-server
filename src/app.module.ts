import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './module/auth/auth.module';
import { HTModule } from './module/hotelType/ht.module';
import { HInfraModule } from './module/infrastructure/infra.module';
import { HNutritionModule } from './module/nutrition/nutrition.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", 'upload')
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config]
    }),
    AuthModule,
    HTModule,
    HInfraModule,
    HNutritionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
