function withCreateTimeSchema(schema) {
  schema.createdTime = {
    type: Date,
    required: true,
  };
  return schema;
}

export default withCreateTimeSchema;
