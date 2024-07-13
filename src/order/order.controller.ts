import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { OrderService } from "./order.service";
import { ItemService } from "./item/item.service";
import { Order } from "./dto/order.dto";
import { Item } from "./item/dto/item.dto";

@Controller('orders')
export class OrderController {
    constructor(
        private readonly orderService: OrderService,
        private readonly itemService: ItemService
    ) {}

    @Post()
    async createOrder(@Body() body: Order) {
        return await this.orderService.create(body); 
    }

    @Post(':order_id/items')
    async createItem(@Param('order_id') order_id: string, @Body() body: Item) {
        return await this.itemService.create(order_id, body); 
    }

    @Get(':id')
    async getOrder(@Param('id') id: string) {
        return await this.orderService.get(id); 
    }

    @Get()
    async getAllOrders() {
        return await this.orderService.getAll(); 
    }

    @Get(':id/taxes')
    async getTaxes(@Param('id') id: string) {
        return await this.orderService.taxes(id); 
    }
}