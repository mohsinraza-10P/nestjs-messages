import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  service: MessagesService;

  constructor() {
    // Controller is creating its own dependency
    // DONT DO THIS IN REAL APPS
    this.service = new MessagesService();
  }

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
