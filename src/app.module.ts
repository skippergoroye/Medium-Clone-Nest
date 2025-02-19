import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from "./ormconfig"



@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagsModule],
  controllers: [AppController, TagsController],
  providers: [AppService],
})
export class AppModule {}
