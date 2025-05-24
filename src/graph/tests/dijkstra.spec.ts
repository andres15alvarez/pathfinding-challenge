import { Dijkstra } from '../helpers/dijkstra';

describe('Dijkstra Algorithm', () => {
  let dijkstra: Dijkstra;
  const nodes = ['A', 'B', 'C', 'D', 'E'];

  it('should find the shortest path and cost', () => {
    const edges = [
      { from: 'A', to: 'B', cost: 1 },
      { from: 'A', to: 'C', cost: 4 },
      { from: 'B', to: 'C', cost: 2 },
      { from: 'B', to: 'D', cost: 5 },
      { from: 'C', to: 'D', cost: 1 },
      { from: 'D', to: 'E', cost: 3 },
      { from: 'C', to: 'E', cost: 6 },
    ];
    const start = 'A';
    const end = 'E';
    const expectedPath = ['A', 'B', 'C', 'D', 'E'];
    const expectedCost = 7;
    dijkstra = new Dijkstra(nodes, edges);
    const result = dijkstra.findShortestPath(start, end);
    expect(result.path).toEqual(expectedPath);
    expect(result.cost).toEqual(expectedCost);
  });

  it('should return empty path and cost Infinity if no path exists', () => {
    const edges = [
      { from: 'A', to: 'B', cost: 1 },
      { from: 'B', to: 'C', cost: 2 },
    ];
    const start = 'A';
    const end = 'D';
    dijkstra = new Dijkstra(nodes, edges);
    const result = dijkstra.findShortestPath(start, end);
    expect(result.path).toEqual([]);
    expect(result.cost).toEqual(Infinity);
  });

  it('should handle invalid nodes gracefully', () => {
    const edges = [
      { from: 'A', to: 'B', cost: 1 },
      { from: 'B', to: 'C', cost: 2 },
    ];
    const start = 'X';
    const end = 'Y';
    dijkstra = new Dijkstra(nodes, edges);
    const result = dijkstra.findShortestPath(start, end);
    expect(result.path).toEqual([]);
    expect(result.cost).toEqual(Infinity);
  });
  it('should handle invalide from node to same node', () => {
    const edges = [{ from: 'A', to: 'A', cost: 1 }];
    const start = 'A';
    const end = 'A';
    dijkstra = new Dijkstra(nodes, edges);
    const result = dijkstra.findShortestPath(start, end);
    expect(result.path).toEqual([]);
    expect(result.cost).toEqual(Infinity);
  });
  it('should handle same start and end node', () => {
    const edges = [
      { from: 'A', to: 'B', cost: 1 },
      { from: 'B', to: 'C', cost: 2 },
      { from: 'C', to: 'D', cost: 3 },
    ];
    const start = 'A';
    const end = 'A';
    dijkstra = new Dijkstra(nodes, edges);
    const result = dijkstra.findShortestPath(start, end);
    expect(result.path).toEqual(['A']);
    expect(result.cost).toEqual(0);
  });
});
