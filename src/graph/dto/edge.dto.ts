import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class EdgeDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The starting node of the edge',
    type: String,
  })
  from: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'The ending node of the edge',
    type: String,
  })
  to: string;

  @IsNotEmpty()
  @IsPositive()
  @ApiProperty({
    description: 'The cost of the edge',
    type: Number,
  })
  cost: number;
}
