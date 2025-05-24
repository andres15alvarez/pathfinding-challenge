import { Injectable } from '@nestjs/common';
import { GraphDto, OptimalPathDto } from './dto/graph.dto';
import { Dijkstra } from './helpers/dijkstra';

@Injectable()
export class GraphService {
  findShortestPath(graph: GraphDto): OptimalPathDto {
    const dijkstra = new Dijkstra(graph.nodes, graph.edges);
    const result = dijkstra.findShortestPath(graph.start, graph.end);
    return result;
  }
}
