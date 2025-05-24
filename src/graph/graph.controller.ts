import { Body, Controller, Post } from '@nestjs/common';
import { GraphService } from './graph.service';
import { GraphDto, OptimalPathDto } from './dto/graph.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('graph')
export class GraphController {
  constructor(private readonly graphService: GraphService) {}

  @Post('shortest-path')
  @ApiOperation({
    summary: 'Find the shortest path in a graph',
  })
  @ApiResponse({
    status: 200,
    description: 'The shortest path and its cost',
    type: OptimalPathDto,
  })
  findShortestPath(@Body() graph: GraphDto): OptimalPathDto {
    return this.graphService.findShortestPath(graph);
  }
}
