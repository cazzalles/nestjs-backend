import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "../../database/prisma.service";
import { Item } from "./dto/item.dto";

@Injectable()
export class ItemService {
    constructor(
        private prisma: PrismaService
    ) {}

    async create(order_id: string, body: Item) {
        const { name, price, type } = body;

        const data =  {
            id: randomUUID(),
            name,
            price,
            order_id
        }

        const create = {
            "product":  this.prisma.product.create.bind(this.prisma.product), 
            "service":  this.prisma.service.create.bind(this.prisma.service), 
            "loan":     this.prisma.loan.create.bind(this.prisma.loan)
        }
        const item = await create[type]({ data });
        
        return {
            item
        }
    }

    async getAllProducts(order_id: string) {
        const products = await this.prisma.product.findMany({
            where: { order_id }
        })

        return [
            ...products
        ]
    }

    async getAllServices(order_id: string) {
        const services = await this.prisma.service.findMany({
            where: {
                order_id
            }
        })

        return [
            ...services
        ]
    }

    async getAllLoans(order_id: string) {
        const loans = await this.prisma.loan.findMany({
            where: {
                order_id
            }
        })

        return [
            ...loans
        ]
    }
}
