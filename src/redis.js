const redis = require('redis');

const redisClient = redis.createClient();
redisClient.on('error', (err) => console.log('Redis Client Error', err));

async function connectRedis(){
    await redisClient.connect();
}

module.exports = {
    connectRedis,
    redisClient
}