import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastruture/env-config/env-config.module';

@Module({
  imports: [

  EnvConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
