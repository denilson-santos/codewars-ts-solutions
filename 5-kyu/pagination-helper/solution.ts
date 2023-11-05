export class PaginationHelper<T = unknown> {
  private result: T[][] = [];

  public constructor(private collection: T[], private itemsPerPage: number) {
    let pageItems: T[] = [];

    for (let i = 0; i < collection.length; i += itemsPerPage) {
      for (let j = 0; j < itemsPerPage; j++) {
        if (i + j < collection.length) {
          pageItems.push(collection[i + j]);
        }
      }

      this.result.push(pageItems);

      pageItems = [];
    }
  }

  public itemCount() {
    return this.collection.length;
  }

  public pageCount() {
    return this.result.length;
  }

  public pageItemCount(pageIndex: number) {
    return this.result[pageIndex] ? this.result[pageIndex].length : -1;
  }

  public pageIndex(itemIndex: number) {
    if (itemIndex > -1 && itemIndex <= this.itemCount() - 1) {
      return Math.floor(itemIndex / this.itemsPerPage);
    }

    return -1;
  }
}
