interface Point {
    x: number;
    y: number;
}
/** Finds the shortest orthogonal path between start and end based on grid and dijkstra path finding algorithm
 * @param start - the position in px of the start point
 * @param end - the position in px of the end point
 * @param gridSize - grid size of the grid to rout in the orthogonal path
 * @param gridAllocation - optional [][] matrix to define allocated grid cells
 * @returns - Array of positions in px building the orthogonal path
 */
export declare function getOrthogonalPath(start: Point, end: Point, gridSize: number, gridAllocation?: (0 | 1)[][]): Point[];
export {};
