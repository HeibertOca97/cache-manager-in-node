const fs = require('fs-extra');
const path = require('path');


const CACHE_DIR = path.join(__dirname, '../caches');
const FORMAT_DEFAULT = ".text";


//Check if There's a "/caches" directory created.
fs.ensureDir(CACHE_DIR);


const createCache = async (name, data) => {
  const filePath = path.join(CACHE_DIR, name + FORMAT_DEFAULT);
  await fs.writeFile(filePath, JSON.stringify(data));
}

const removeCache = async (name) => {
  const filePath = path.join(CACHE_DIR, name + FORMAT_DEFAULT);
  await fs.remove(filePath);
}

const getCache = async (name) => {
  const filePath = path.join(CACHE_DIR, name + FORMAT_DEFAULT);
  if(await fs.pathExists(filePath)){
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  }
  return null;
}


module.exports = {
  createCache,
  removeCache,
  getCache
}
