import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { join } from 'path'
import { ConfigModuleOptions } from './../../../../node_modules/@nestjs/config/dist/interfaces/config-module-options.interface.d'
import { EnvConfigService } from './env-config.service'

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule extends ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return super.forRoot({
      ...options,
      envFilePath :[
        join(__dirname,`../../../../.env.${process.env.NODE_ENV}`)
      ]
    })
  }
}
