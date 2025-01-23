import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres', /* Se for postgreSQL - postgres */
        host: 'localhost',
        port: 5432, /* 5432 */
        username: 'postgres',
        password: 'ifrn.cn',
        database: 'testeLindo',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];