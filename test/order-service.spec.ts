import { PrismaService } from "../src/database/prisma.service";
import { ItemService } from "../src/order/item/item.service";
import { OrderService } from "../src/order/order.service";


test('OrderService criada', () => {
    const prismaService = new PrismaService(); 
    const itemService = new ItemService(prismaService); 
    const orderService = new OrderService(prismaService, itemService); 

    expect(typeof orderService).toBe("object");

});