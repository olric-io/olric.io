---
sidebar_position: 1
---

# Quickstart

## Install

Olric is a Golang library. So you can just run `go get...` to install it in your environment. Also, most recent Docker
images are distributed via DockerHub.

In a properly configured Golang environment:

```
go get -u github.com/buraksezer/olric
```

This will add the latest stable Olric version to your environment.

You can launch *olricd* Docker container by running the following command.

```
docker run -p 3320:3320 olricio/olricd:latest
```

This command will pull the latest *olricd* Docker image and run a new Olric Instance. You should know that the container exposes 
`3320` and `3322` ports. If everything goes well, you will have a standalone Olric node. Please note that, you can always
add a new node to your setup to scale-out easily. It doesn't require any complex setup or external plugins.

## Look and feel

### Embedded-member scenario

Olric has two different deployment scenarios. You can embed Olric into your application. So you can share the heap
storage among the cluster members. It is called **embedded-member** deployment scenario. In your application code, 
you can easily access the cluster and run queries.

The following example, creates a new embedded client and run simple *Put* and *Get* operations on the distributed map
data structure.

Please note that, the official Golang client implementation is a type-safe client. You don't need extra decoding stage
to use the retrieved values, but you can insert any type into distributed maps.

```go
e := db.NewEmbeddedClient()
dm, err := e.NewDMap("bucket-of-arbitrary-items")
if err != nil {
    log.Fatalf("olric.NewDMap returned an error: %v", err)
}

// Magic starts here!
ctx = context.Background()
err = dm.Put(ctx, "string-key", "string-value")
if err != nil {
    log.Fatalf("Failed to call Put: %v", err)
}

gr, err := dm.Get(ctx, "string-key")
if err != nil {
    log.Fatalf("Failed to call Get: %v", err)
}
value, err := gr.String()
if err != nil {
    log.Fatalf("Failed to call String on GetResponse: %v", err)
}
fmt.Println("Value for string-key:", value)
```

### Server-client scenario

You don't have to join the cluster to query your data. Olric works well with classic **server-client** scenario. Assume that
you deployed an Olric cluster on Kubernetes and it automatically scale-out to fulfill your requirements. In web servers, you need to
access the Olric cluster. The following code snippet shows how you can query distributed maps with `ClusterClient`:

```go
ctx = context.Background()
e, err := olric.NewClusterClient([]string{"localhost:3320"})
if err != nil {
    log.Fatalf("olric.NewClusterClient returned an error: %v", err)
}

dm, err := e.NewDMap("bucket-of-arbitrary-items")
if err != nil {
    log.Fatalf("olric.NewDMap returned an error: %v", err)
}

// Magic starts here!
ctx = context.Background()

// Put a key into the distributed map.
err = dm.Put(ctx, "string-key", "string-value")
if err != nil {
    log.Fatalf("Failed to call Put: %v", err)
}

// Retrieve the key again.
gr, err := dm.Get(ctx, "string-key")
if err != nil {
    log.Fatalf("Failed to call Get: %v", err)
}

value, err := gr.String()
if err != nil {
    log.Fatalf("Failed to call String on GetResponse: %v", err)
}
fmt.Println("Value for string-key:", value)
```

## redis-cli and Redis clients

Olric uses the [Redis protocol](https://redis.io/topics/protocol). So you can use any Redis client to access the cluster, including [redis-cli](https://redis.io/topics/rediscli). 

Assume that you run an Olric node in Docker environment. Start `redis-cli`:

```
redis-cli -p 3320
127.0.0.1:3320> DM.PUT mydmap mykey "Olric Rocks!"
OK
127.0.0.1:3320> DM.GET mydmap mykey
"Olric Rocks!"
```

In Python:

```python
import redis

r = redis.Redis(port=3320)

res = r.execute_command("DM.PUT", "mydmap", "mykey", "Olric rocks!")
print(res)  # b'OK'

res = r.execute_command("DM.GET", "mydmap", "mykey")
print(res)  # b'Olric rocks!'
```

You can use any Redis client to access an Olric cluster. The official Golang client is just a thin layer around [go-redis/redis](https://github.com/go-redis/redis).