import * as dotenv from 'dotenv';

dotenv.config();

interface Config {
  test_key: string;
}

export const config: Config = {
  test_key: process.env.TEST_KEY || 'none test key',
};
