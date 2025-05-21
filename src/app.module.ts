import { Module } from '@nestjs/common';
import { GraphModule } from './graph/graph.module';
import { AppController } from './app.controller';

@Module({
  imports: [GraphModule],
  controllers: [AppController],
})
export class AppModule {}
