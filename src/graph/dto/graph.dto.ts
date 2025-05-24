import { ArrayNotEmpty, IsNotEmpty } from 'class-validator';
import { EdgeDto } from './edge.dto';

export class GraphDto {
  @ArrayNotEmpty()
  nodes: string[];

  @IsNotEmpty()
  start: string;

  end: string;

  @ArrayNotEmpty()
  edges: EdgeDto[];

  constructor(nodes: string[], start: string, end: string, edges: EdgeDto[]) {
    if (nodes.includes(start) === false) {
      throw new Error(`Start node ${start} is not in the list of nodes`);
    }
    if (nodes.includes(end) === false) {
      throw new Error(`End node ${end} is not in the list of nodes`);
    }
    const invalidEdge = edges.find((edge) => edge.from === edge.to);
    if (invalidEdge) {
      throw new Error(
        `Edge from ${invalidEdge.from} to ${invalidEdge.to} is invalid`,
      );
    }
    const invalidFrom = edges.find(
      (edge) => nodes.includes(edge.from) === false,
    );
    if (invalidFrom) {
      throw new Error(
        `Edge from ${invalidFrom.from} is not in the list of nodes`,
      );
    }
    const invalidTo = edges.find((edge) => nodes.includes(edge.to) === false);
    if (invalidTo) {
      throw new Error(`Edge to ${invalidTo.to} is not in the list of nodes`);
    }
    this.nodes = nodes;
    this.start = start;
    this.end = end;
    this.edges = edges;
  }
}
