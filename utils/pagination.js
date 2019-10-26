class Pagination {
  Schema = null;

  page = 1;

  pageSize = 10;

  constructor(Schema) {
    this.Schema = Schema;
  }

  set(page = 1, pageSize = 10) {
    this.page = page;
    this.pageSize = pageSize;
  }

  async getCount(schema) {
    const count = await this.Schema.countDocuments(schema);
    return count;
  }

  async query(ctx, schema = {}, sorter = {}) {
    const { page } = this; const
      { pageSize } = this;
    const start = (page - 1) * pageSize;
    const totalCount = await this.getCount(schema);
    const reply = await this.Schema.find(schema).sort(sorter).skip(start).limit(pageSize);
    ctx.set({
      'x-pagination-page': page,
      'x-pagination-pageSize': pageSize,
      'x-pagination-total': totalCount,
    });
    return reply;
  }
}

export default Pagination;
