import { MessagesRepository } from './messages.repository';

export class MessagesService {
  repository: MessagesRepository;

  constructor() {
    // Service is creating its own dependency
    // DONT DO THIS IN REAL APPS
    this.repository = new MessagesRepository();
  }

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
