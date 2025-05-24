import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { EdgeDto } from './edge.dto';
import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GraphDto {
  @ArrayNotEmpty()
  @IsString({ each: true })
  @ApiProperty({
    description: 'List of nodes in the graph',
    type: [String],
  })
  nodes: string[];

  @IsNotEmpty()
  @ApiProperty({
    description: 'Start node for the pathfinding',
    type: String,
  })
  start: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'End node for the pathfinding',
    type: String,
  })
  end: string;

  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => EdgeDto)
  @ApiProperty({
    description: 'List of edges in the graph',
    type: [EdgeDto],
  })
  edges: EdgeDto[];
}

export class OptimalPathDto {
  @Expose()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The optimal path from start to end',
    type: [String],
  })
  path: string[];

  @Expose()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The cost of the optimal path',
    type: Number,
  })
  cost: number;
}
