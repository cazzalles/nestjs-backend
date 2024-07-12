import { IsNotEmpty } from "class-validator";

export class Order {
    @IsNotEmpty({
        message: 'The order name must not be empty.'
    })
    name: string
}