import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>){

    }
    // private readonly items: Item[] = [
    //     {
    //         id:"1232132321",
    //         name:"Item One",
    //         qty: 100,
    //         description:"This is item one",
         
    //     },
    //     {
    //         id:"1232132322",
    //         name:"Item Two",
    //         qty: 200,
    //         description:"This is item two",
         
    //     },
    //     {
    //         id:"1232132323",
    //         name:"Item Three",
    //         qty: 300,
    //         description:"This is item three",
         
    //     }
    // ];

   async findAll(): Promise<Item[]> {
       return await this.itemModel.find()
        // return this.items
    }
    async findOne(id: string): Promise<Item> {
      return await this.itemModel.findOne({_id: id})
        // return this.items.find(item => item.id === id)
    }
    async create(item: Item):Promise<Item> {
        const newitem = new this.itemModel(item)
        return await newitem.save()
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
      }
    
      async update(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
      }
}
