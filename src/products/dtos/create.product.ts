// https://docs.nestjs.com/techniques/validation
// https://github.com/typestack/class-validator
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  id: string | null;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @MinLength(3, { message: 'Name min lenght required is 3' })
  @MaxLength(20, { message: 'Name max lenght required is 20' })
  @ApiProperty({ required: true, example: 'MacBook Pro', description: 'Name' })
  name: string;

  @IsString()
  @ApiProperty({
    required: false,
    example: 'Description of MacBook Pro',
    description: 'Description',
  })
  description: string | null;

  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber({}, { message: 'Price is a numeric value' })
  @ApiProperty({ required: true, example: '19899.99', description: 'Price' })
  price: number;
}
