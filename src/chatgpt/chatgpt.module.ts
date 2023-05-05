import { Module } from '@nestjs/common';
import { ChatgptService } from './chatgpt.service';
import { ChatgptController } from './chatgpt.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ChatgptService],
  controllers: [ChatgptController],
  exports: [ChatgptService],
})
export class ChatgptModule {}