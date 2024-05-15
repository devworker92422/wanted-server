import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './module/auth/auth.module';
import { HTModule } from './module/hotelFacility/hotelType/ht.module'
import { HInfraModule } from './module/hotelFacility/infrastructure/infra.module';
import { HNutritionModule } from './module/hotelFacility/nutrition/nutrition.module';
import { HTranFacModule } from './module/hotelFacility/transportFacility/tranFac.module';
import { HChildFacModule } from './module/hotelFacility/childFacility/childFac.module';
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
    HTranFacModule,
    HChildFacModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
