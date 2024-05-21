// import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
// import { SqlServerClient } from '@prisma/client';

// @Injectable()
// export class PrismaService extends SqlServerClient implements OnModuleInit {
//   async onModuleInit() {
//     await this.$connect();
//   }

// //   async enableShutdownHooks(app:INestApplication){
// //     this.$on('beforeExit', async () => {
// //         await app.close();
// //     });
// //   }
// }