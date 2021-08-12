import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ description: 'ID. Readonly', required: false })
  id: string | null;

  @ApiProperty({ description: 'Name', required: true })
  name: string;

  @ApiProperty({ description: 'Description', required: false })
  description: string | null;

  @ApiProperty({ description: 'Price', required: true, example: '65.89' })
  price: number;
}
