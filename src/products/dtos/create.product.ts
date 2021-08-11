// https://docs.nestjs.com/techniques/validation
// https://github.com/typestack/class-validator
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  id: string | null;

  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  @MinLength(3, { message: 'Name min lenght required is 3' })
  @MaxLength(20, { message: 'Name max lenght required is 20' })
  name: string;

  description: string | null;

  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber({}, { message: 'Price is a numeric value' })
  price: number;
}
