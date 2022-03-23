---
sidebar_position: 1
---

# What is Olric?

Olric is a distributed, in-memory data structure store. It's designed from the ground up to be distributed, and it can be 
used both as an embedded Go library and as a language-independent service.

With Olric, you can instantly create a fast, scalable, shared pool of RAM across a cluster of computers. 

Olric is implemented in [Go](https://go.dev/) and uses the [Redis protocol](https://redis.io/topics/protocol). That means Olric 
has client implementations in all major programming languages. 

Olric is highly scalable and available. Distributed applications can use it for distributed caching, clustering and 
pub/sub messaging.

It is designed to scale out to hundreds of members and thousands of clients. When you add new members, they automatically 
discover the cluster and linearly increase the memory capacity. Olric offers simple scalability, partitioning (sharding), 
and re-balancing out-of-the-box. It does not require any extra coordination processes. With Olric, when you start another 
process to add more capacity, data and backups are automatically and evenly balanced.


