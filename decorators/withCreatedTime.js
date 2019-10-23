function withCreateTimeSchema(schema) {
  schema.createdTime = {
    type: Date,
    required: true,
  };
  schema.updatedTime = {
    type: Date,
    required: false,
  };
  return schema;
}

export default withCreateTimeSchema;
