import { IsEnum, IsNotEmpty, IsNumber } from "class-validator"
import { Types } from "../enum/types/types.enum"

export class Item {
    @IsNotEmpty({
        message: 'Item type must not be empty.'
    })
    @IsEnum(Types, { message: 'Type must a valid value.' })
    type: Types
    
    @IsNotEmpty({
        message: 'Item name must not be empty.'
    })
    name: string

    @IsNotEmpty({
        message: 'Item price must not be empty.'
    })
    @IsNumber()
    price: number
}