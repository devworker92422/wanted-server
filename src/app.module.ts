import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from './module/auth/auth.module';
import { HTModule } from './module/hotelType/ht.module';
import { FacGroupModule } from './module/facilityGroup/facGroup.module';
import { ImageModule } from './module/image/image.module';
import { FacilityModule } from './module/facility/facility.module';
import { RoomModule } from './module/room/room.module';
import { HotelModule } from './module/hotel/hotel.module';
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
    FacGroupModule,
    ImageModule,
    FacilityModule,
    RoomModule,
    HotelModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
