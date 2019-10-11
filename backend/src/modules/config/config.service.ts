import * as Joi from '@hapi/joi';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    if (fs.existsSync(filePath)) {
      const config = dotenv.parse(fs.readFileSync(filePath));
      this.envConfig = this.validateInput(config);
    } else {
      this.envConfig = {};
    }
  }

  get(key: string, defaultValue?: string): string {
    return this.envConfig[key] || process.env[key] || defaultValue;
  }

  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      PORT: Joi.number().default(4201),
      LINKEDIN_CLIENT_ID: Joi.string().required(),
      LINKEDIN_CLIENT_SECRET: Joi.string().required(),
    });

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
