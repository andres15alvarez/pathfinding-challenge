import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { EdgeDto } from './edge.dto';
import { Expose, Type } from 'class-transformer';

export class GraphDto {
  @ArrayNotEmpty()
  @IsString({ each: true })
  nodes: string[];

  @IsNotEmpty()
  start: string;

  @IsNotEmpty()
  end: string;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => EdgeDto)
  edges: EdgeDto[];
}

export class OptimalPathDto {
  @Expose()
  @IsNotEmpty()
  path: string[];

  @Expose()
  @IsNotEmpty()
  cost: number;
}
