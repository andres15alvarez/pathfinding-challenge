import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class EdgeDto {
  @IsNotEmpty()
  @IsString()
  from: string;

  @IsNotEmpty()
  @IsString()
  to: string;

  @IsNotEmpty()
  @IsPositive()
  cost: number;
}
