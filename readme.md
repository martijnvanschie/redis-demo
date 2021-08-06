# Deno Redis Demo

## Prerequisites

### Redis Server

Get the image

```bash
docker pull redis
```

Start the Redis Docker container

```bash
docker run -it --name redis-server -d redis
```

Or under a different port. This might be usefull when you already run a local instance of Redis.

```bash
docker run -it --name redis-server -p 7001:6379 -d redis
```

> Note: Not providing a name will have Docker generate a beautifull random name for you like `beautiful_hopper`.

You can also run Redis using docker compose which used the `docker-compose.yaml` file.

```docker
docker-compose up -d #Start the containers for this compose
docker-compose ps #Display the running containers for this compose
docker-compose down #Stop the running containers for this compose
```

## Run the Deno service

### Run the deno app

```bash
deno run --allow-net app.ts
```

### Add a test key

Start Redis CLI

`.\redis-cli.exe`

Ping the Redis instance

`.\redis-cli.exe ping`

Connect to specific instance

`.\redis-cli.exe -h 172.17.0.2 -p 6379 ping`

Get the ip address by inspecting the container

`docker inspect redis-server`

Set the new key value

`set testkey '{ "value": "some value }'`

Check if the key is set

`KEYS *`

### Test the app

Open a browser and connect to

`http://localhost:7700/key/test`

No key is returned as it has not been set yet.

Now add a key using the redis cli

`set test '{ "test": true }'`

And refresh the url. You should now see the value of the key.

## Build the cache service

```bash
docker build -t cache-service:latest -t cache-service:0.2 .
```

## Stopping the demo

Stop Deno service using `ctrl-c`.

Stop the Redis Service container

```bash
docker stop redis-server
docker rm redis-server
```

Or force stop at once

```bash
docker rm -f redis-server
```

## Resources

### Deno Example used for this demo

https://www.freecodecamp.org/news/create-a-todo-api-in-deno-written-by-a-guy-coming-from-node/

### Docker

https://docs.docker.com/engine/reference/commandline/pull/

https://docs.docker.com/engine/reference/commandline/container_run/

https://docs.docker.com/engine/reference/commandline/container_rm/

### Redis

https://hub.docker.com/_/redis

https://redis.io/topics/rediscli

https://blog.logrocket.com/using-redis-in-deno/
