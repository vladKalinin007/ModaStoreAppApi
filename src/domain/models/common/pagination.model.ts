export class Pagination<T> {
  constructor(
    public readonly data: T[],
    public readonly count: number,
    public readonly pageIndex: number,
    public readonly pageSize: number,
  ) {}
}
