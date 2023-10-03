import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Put(':id')
    update(@Body() body: Prisma.UserUpdateInput, @Param('id') id: string) {
        return this.userService.update(body, +id)
    }

    @Post()
    create(@Body() body: Prisma.UserCreateInput){
        return this.userService.create(body);
    }

}
