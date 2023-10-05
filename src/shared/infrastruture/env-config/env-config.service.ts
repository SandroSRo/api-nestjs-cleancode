import { Injectable } from '@nestjs/common';
import { IEnvConfig } from './env-config.interface';
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvConfigService implements IEnvConfig{
  constructor(private configservice: ConfigService){

  }
  getAppPort(): number {
    return Number(this.configservice.get<number>('PORT'))
  }
  getNodeEnv(): string {
    return this.configservice.get<string>('NODE_ENV')
  }
}
