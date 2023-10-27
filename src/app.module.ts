import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppLoggerMiddleware } from './middlewares/app-logger.middleware';
import { UsersModule } from './users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth/auth.guard';
import { PrismaService } from './services/prisma.service';
import { AuthModule } from './guards/auth/auth.module';
import { AppController } from './app.controller';
import { CompaniesModule } from './companies/companies.module';
import { CourtsModule } from './courts/courts.module';

@Module({
  imports: [UsersModule, AuthModule, CompaniesModule, CourtsModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
