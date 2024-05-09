import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public repository: MessagesRepository) {}

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async create(message: string) {
    return await this.repository.create(message);
  }
}
