import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: Number(process.env.PORT) || 3000,
  host: process.env.HOST || 'localhost',
  app: process.env.APP_URL,
  initialPassword: {
    sendCredentialsTo:
      process.env.INITIAL_PASSWORD_SEND_CREDENTIALS_TO ||
      'admin@janammuebles.com',
    passwordLength: Number(process.env.INITIAL_PASSWORD_LENGTH) || 15,
  },
  instrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
}));
