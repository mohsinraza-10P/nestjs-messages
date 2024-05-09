import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  NotFoundException,
  Injectable,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
@Injectable()
export class MessagesController {
  constructor(public service: MessagesService) {}

  @Get('/:id')
  async getMessage(
    @Param('id') id: string,
    @Query('validate') validate: boolean,
  ) {
    const message = await this.service.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found!');
    }
    return message;
  }

  @Get()
  getAllMessages() {
    return this.service.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.service.create(body.content);
  }
}
