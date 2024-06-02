import { Module } from '@nestjs/common';
import { AppController } from '../Presentation/Api/Controllers/app.controller';
import { AppService } from '../Application/Services/app.service';
import { PrismaService } from './Data/Provider/prisma';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    AppService
  ],
})
export class AppModule {}
