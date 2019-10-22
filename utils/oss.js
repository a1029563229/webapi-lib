const OSS = require('ali-oss');
const { OSS_CONFIG: config } = require('@/config');

const client = new OSS(config);

async function upload(localFile) {
  const objectName = `mall/images/${localFile.split('/').pop()}`;
  const result = await client.put(objectName, localFile);
  return result.url;
}

export default upload;
