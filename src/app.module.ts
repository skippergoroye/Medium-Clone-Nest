import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';



@Module({
  imports: [ TypeOrmModule.forRoot(dataSourceOptions), TagsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
