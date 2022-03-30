---
sidebar_position: 2
---

# Features

Olric is implemented in Golang, and thanks to its unique architecture it can be used both as an embedded Go library and 
as a language-independent service.

Currently, Olric provides distributed map and publish/subscribe services with automatic peer discovery. It's designed to
scale out easily and distribute data evenly and automatically among cluster members.

Olric can automatically discover peers and scale-out on Kubernetes and many cloud providers. See [olric-cloud-plugin](https://github.com/buraksezer/olric-cloud-plugin). 

In the context of the CAP principle, Olric is an AP system. It chooses **availability** over **consistency** in the case of partitioning. 
So it is an eventually consistent data store.

Here is a list of features:

* Designed to share some transient, approximate, fast-changing data between servers,
* Has a Redis compatible API and uses Redis protocol,
* Only in-memory,
* GC-friendly storage engine,
* Embeddable but can be used as a language-independent service,
* Supports different eviction algorithms (including LRU and TTL),
* Thread-safe by default,
* Highly available and horizontally scalable,
* Provides best-effort consistency guarantees without being a complete CP (indeed PA/EC) solution,
* Supports replication by default (with sync and async options),
* Quorum-based voting for replica control (Read/Write quorums),
* Supports atomic operations on distributed maps,
* Implements an [iterator](#iterator) on distributed maps,
* Provides a plugin interface for service discovery daemons,
* Provides a locking primitive which inspired by [SETNX of Redis](https://redis.io/commands/setnx#design-pattern-locking-with-codesetnxcode),
* Provides a drop-in replacement for Redis Publish/Subscribe messaging system.

See [Architecture](#) and [Data Structures](#) sections to get more information.