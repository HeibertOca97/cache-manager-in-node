const router = require('express').Router();
const {createCache, getCache} = require('../core/cache');
const {fetchFromDatabase} = require('../core/db');
const cacheName = "task";

router.get('/', async (req, res) => {
  let cacheData = await getCache(cacheName);
  
  if(cacheData){
    return res.status(200).json({
      status: true,
      data: cacheData,
      message: 'cacheData',
    });
  }
  const data = await fetchFromDatabase();
  await createCache(cacheName, data);
  res.status(200).json({
    status: true,
    data,
    message: 'data',
  });
});

router.get('/create', async (req, res) => {
  let cacheData = await getCache(cacheName);
  if(!cacheData){
    cacheData = [];
  }
  let id = cacheData.length + 1;
  cacheData.push({ id, task: 'Clean room ' + id });
  
  await createCache(cacheName, cacheData);
  res.status(201).json({
    status: true,
    data: cacheData
  });
});

module.exports = router;
