import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    findAll() {
    }

    @Get('/:id')
    find(@Param('id') id: string, @Query('validate') validate: boolean) {
    }

    @Post()
    create(@Body() body: any) {
    }
}
