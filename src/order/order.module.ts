import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { ItemService } from './item/item.service';
import { PrismaService } from 'src/database/prisma.service';
import { Item } from './item/dto/item.dto';
import { Order } from './dto/order.dto';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [PrismaService, OrderService, ItemService, Order, Item]
})

export class OrderModule {}