import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
// import { Request, Response } from 'express';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService){

    }
    // @Get()
    // findAll(@Req() req:Request, @Res() res: Response ): Response  {
    //     console.log(req.url)
    //     return res.send('hello')
    //     // return 'Get all items'
    // }

    @Get()
    async findAll(): Promise<Item[]> {
        // return 'Get all items'
        return this.itemService.findAll()
    }

    @Get(':id')
    async  findOne(@Param('id') id): Promise<Item> {
        // return  `Item ${id}`
        return this.itemService.findOne(id)
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto  ): Promise<Item> {
        return this.itemService.create(createItemDto)
        //  return 'Create item'
        // return `Name: ${createItemDto.name} Description: ${createItemDto.description}`
     }

     @Delete(':id')
      delete(@Param('id') id): Promise<Item> {
        return this.itemService.delete(id);
       }

  @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
     return this.itemService.update(id, updateItemDto);
    }

    //  @Delete(':id')
    //  delete(@Param('id') id):string {
    //      return `Delete item ${id}`
    //  }

    //  @Put(':id')
    //  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    //      return `Update item ${id} with name: ${updateItemDto.name}`
    //  }
    

}
