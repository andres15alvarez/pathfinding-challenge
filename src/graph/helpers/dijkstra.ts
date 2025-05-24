import { EdgeDto } from '../dto/edge.dto';
import { OptimalPathDto } from '../dto/graph.dto';

export class Dijkstra {
  private graph: Map<string, Map<string, number>> = new Map();

  constructor(nodes: string[], edges: EdgeDto[]) {
    const filteredNodes = nodes.filter((node) =>
      edges.some((edge) => edge.from === node || edge.to === node),
    );

    const filteredEdges = edges.filter(
      (edge) =>
        filteredNodes.includes(edge.from) && filteredNodes.includes(edge.to),
    );

    const validEdges = filteredEdges.filter(
      (edge) => edge.from !== edge.to && edge.cost > 0,
    );

    const validNodes = filteredNodes.filter((node) =>
      validEdges.some((edge) => edge.from === node || edge.to === node),
    );

    validNodes.forEach((node) => this.graph.set(node, new Map()));
    validEdges.forEach((edge) => {
      this.graph.get(edge.from)?.set(edge.to, edge.cost);
    });
  }
  findShortestPath(start: string, end: string): OptimalPathDto {
    if (!this.graph.has(start) || !this.graph.has(end)) {
      return { path: [], cost: Infinity };
    }
    if (start === end) {
      return { path: [start], cost: 0 };
    }
    const distances: Map<string, number> = new Map();
    const previous: Map<string, string | null> = new Map();
    const queue: Set<string> = new Set(this.graph.keys());

    this.graph.forEach((_, node) => {
      distances.set(node, Infinity);
      previous.set(node, null);
    });

    distances.set(start, 0);

    while (queue.size > 0) {
      const currentNode = this.getClosestNode(queue, distances);

      if (distances.get(currentNode)! === Infinity) {
        break;
      }

      if (currentNode === end) {
        return {
          path: this.buildPath(previous, start, end),
          cost: distances.get(end) || Infinity,
        };
      }
      queue.delete(currentNode);

      this.graph.get(currentNode)?.forEach((cost, neighbor) => {
        if (queue.has(neighbor)) {
          const newDist = distances.get(currentNode)! + cost;
          if (newDist < (distances.get(neighbor) || Infinity)) {
            distances.set(neighbor, newDist);
            previous.set(neighbor, currentNode);
          }
        }
      });
    }

    return { path: [], cost: Infinity };
  }
  private getClosestNode(
    queue: Set<string>,
    distances: Map<string, number>,
  ): string {
    let closestNode: string | null = null;
    let minDistance = Infinity;

    queue.forEach((node) => {
      const distance = distances.get(node)!;
      if (distance < minDistance) {
        minDistance = distance;
        closestNode = node;
      }
    });

    return closestNode!;
  }
  private buildPath(
    previous: Map<string, string | null>,
    start: string,
    end: string,
  ): string[] {
    const path: string[] = [];
    let currentNode: string | null = end;

    while (currentNode !== null) {
      path.unshift(currentNode);
      if (currentNode === start) break;
      currentNode = previous.get(currentNode)!;
    }

    return path[0] === start ? path : [];
  }
}
