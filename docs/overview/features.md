---
sidebar_position: 2
---

# Features

* Designed to share some transient, approximate, fast-changing data between servers,
* Accepts arbitrary types as value,
* Only in-memory,
* GC-friendly storage engine,
* O(1) running time for lookups,
* Embeddable but can be used as a language-independent service,
* Supports different eviction algorithms,
* Supports Redis protocol,
* Thread-safe by default,
* Highly available and horizontally scalable,
* Provides best-effort consistency guarantees without being a complete CP (indeed PA/EC) solution,
* Supports replication by default (with sync and async options),
* Quorum-based voting for replica control (Read/Write quorums),
* Supports atomic operations,
* Implements an [iterator](#query) on distributed maps,
* Provides a plugin interface for service discovery daemons,
* Provides a locking primitive which inspired by [SETNX of Redis](https://redis.io/commands/setnx#design-pattern-locking-with-codesetnxcode),
* Provides a drop-in replacement for Redis Publish/Subscribe messaging system.