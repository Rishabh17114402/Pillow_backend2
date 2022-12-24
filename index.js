const express = require("express")
const app = express();
const { redisClient, connectRedis } = require('./src/redis')

const customRedisRateLimiter = require('./src/rateLimiter');
const req = require("express/lib/request");


app.get("/", customRedisRateLimiter, async (request, response) => {
  
  response.send(200, {message: "You can access meeee", remaining: req.remainingHits })

})

connectRedis()
app.listen(8080, () => console.log("SERVER IS RUNNING......."))