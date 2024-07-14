import { OrderService } from "src/order/order.service";
import { PrismaService } from "src/database/prisma.service";
import { ItemService } from "src/order/item/item.service"; 
import { Order } from "src/order/dto/order.dto";

const prisma = new PrismaService();
const itemService = new ItemService(prisma); 
const order = new OrderService(prisma, itemService); 
const orderBody = new Order(); 

test('Order service', () => {
    expect(order).toBe(OrderService); 
});

test('Order service create', () => {
    const create = async () =>{
        await order.create(orderBody) 
    }
    
    expect(create()).toBe(orderBody); 
});
