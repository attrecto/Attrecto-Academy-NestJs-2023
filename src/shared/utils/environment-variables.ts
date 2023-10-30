import { IsEnum, IsString } from 'class-validator';

enum NodeEnvironment {
  DEV = 'development',
  PROD = 'production',
}

export class EnvironmentVariables {
  @IsString()
  JWT_SECRET: string;

  @IsEnum(NodeEnvironment)
  NODE_ENV: NodeEnvironment;
}
