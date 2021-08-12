// https://docs.nestjs.com/techniques/validation
// https://github.com/typestack/class-validator
import { IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create.product';

export class UpdateProductDto extends CreateProductDto {
  @IsNotEmpty({ message: 'ID is required' })
  @IsUUID('all', { message: 'ID should be UUID' })
  @ApiProperty({ required: true, example: '19899.99', description: 'Price' })
  id: string | null;
}
