import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET_KEY,
  expireIn: process.env.JWT_EXPIRATION_TIME,
}));
