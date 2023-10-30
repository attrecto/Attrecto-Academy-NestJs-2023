import { plainToClass } from 'class-transformer';
import { EnvironmentVariables } from './environment-variables';
import { validateSync } from 'class-validator';

export function validateEnv(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, { enableImplicitConversion: true });

  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }

  return validatedConfig;
}
