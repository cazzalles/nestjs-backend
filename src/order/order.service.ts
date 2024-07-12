import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "../database/prisma.service";
import { ItemService } from "src/item/item.service";
import { Order } from "./dto/order.dto";

@Injectable()
export class OrderService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly itemService: ItemService 
    ) {}

    async create(body: Order) {
        const { name } = body;

        const order = await this.prisma.order.create({
            data: {
                id: randomUUID(),
                name
            }
        });

        return {
            order
        }
    }

    async get(id: string) {
        const order = await this.prisma.order.findUnique({
            where: { id }
        });
                
        return {
            order
        }
    }

    async getAll() {
        return await this.prisma.order.findMany(); 
    }

    async taxes(id: string) {
        const products = await this.itemService.getAllProducts(id);
        const services = await this.itemService.getAllServices(id);
        const loans    = await this.itemService.getAllLoans(id);
        
        const incrementedProducts = products.map(product => ({
            price: product.price + (product.price * 0.1)
        }));

        const incrementedServices = services.map(service => ({
            price: service.price + (service.price * 0.075)
        }));

        const incrementedLoans = loans.map(loan => ({
            price: loan.price + (loan.price * 0.05)
        }));

        const incrementedPrices = [...incrementedProducts, ...incrementedServices, ...incrementedLoans]
        const totalPrice = incrementedPrices.reduce((total, item) => total + item.price, 0); 
        
        return {
            totalPrice 
        }
    }

}
