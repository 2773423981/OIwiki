---
layout: ../../layouts/PostLayout.astro
title: 'Dijkstra 最短路径算法'
pubDate: 2026-05-22
---

## 算法简介

Dijkstra 算法用于求解**非负权图**上单源最短路径问题，由荷兰计算机科学家 Edsger W. Dijkstra 于 1956 年提出。时间复杂度 $O((V+E)\log V)$（堆优化），是 OI 中最常用的图论算法之一。

## 核心思想

维护一个集合 $S$，初始只含起点 $s$。每轮从未访问节点中选取 $dis[u]$ 最小的 $u$ 加入 $S$，并用 $u$ 的邻边松弛（relax）其他节点的 $dis$ 值。

## 算法步骤

1. 初始化 $dis[s]=0$，其余 $dis[v]=\infty$
2. 从未标记节点中选出 $dis$ 最小的 $u$
3. 标记 $u$ 为已访问
4. 对 $u$ 的每条出边 $(u,v,w)$，若 $dis[v] > dis[u] + w$，则更新 $dis[v]$
5. 重复 2-4 直到所有节点已访问

## 正确性证明

**归纳法：** 设第 $k$ 个加入 $S$ 的节点为 $u_k$，则 $dis[u_k]$ 等于 $s$ 到 $u_k$ 的真实最短距离。

归纳基础 $k=1$：$u_1=s$，$dis[s]=0$，成立。

归纳步骤：假设前 $k-1$ 个节点均正确。若 $dis[u_k]$ 不是最短距离，则存在一条更短路径经过某个未加入 $S$ 的节点。但所有未加入节点的 $dis$ 均 $\geq dis[u_k]$（贪心选择），矛盾。

## 堆优化实现

```cpp
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 5;
const long long INF = 1e18;

vector<pair<int, long long>> adj[N];
long long dis[N];
bool vis[N];

void dijkstra(int s, int n) {
    fill(dis, dis + n + 1, INF);
    priority_queue<pair<long long, int>,
        vector<pair<long long, int>>,
        greater<>> pq;
    dis[s] = 0;
    pq.push({0, s});
    
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (vis[u]) continue;
        vis[u] = true;
        for (auto [v, w] : adj[u]) {
            if (dis[v] > dis[u] + w) {
                dis[v] = dis[u] + w;
                pq.push({dis[v], v});
            }
        }
    }
}
```

## 时间复杂度分析

| 操作 | 普通数组 | 优先队列 |
|:--|:--|:--|
| 选最小节点 | $O(V)$ | $O(\log V)$ |
| 松弛操作 | $O(1)$ | $O(\log V)$ |
| 总复杂度 | $O(V^2)$ | $O((V+E)\log V)$ |

## 常见变体

### 记录路径

在松弛时记录前驱节点 $pre[v] = u$，最后反向回溯得到完整路径：

```cpp
int pre[N];
// 松弛时
if (dis[v] > dis[u] + w) {
    dis[v] = dis[u] + w;
    pre[v] = u;
    pq.push({dis[v], v});
}
// 输出路径
void print_path(int t) {
    if (pre[t]) print_path(pre[t]);
    cout << t << ' ';
}
```

### 次短路

在 `dis` 数组之外维护 `dis2`（次短距离）。松弛时同时更新最短和次短。

## 注意事项

- **不能处理负权边**：有负权请用 Bellman-Ford 或 SPFA
- **稠密图**（$E \approx V^2$）：朴素 $O(V^2)$ 可能更快
- **堆优化** 用 `std::priority_queue`，注意存 `lazy deletion` 而非真正删除

## 典型例题

> [洛谷 P4779](https://www.luogu.com.cn/problem/P4779) — 单源最短路径（标准版）
>
> 给定 $n$ 个点 $m$ 条边的有向图，求 $s$ 到各点的最短路。

裸 Dijkstra 模板题，直接套用上述代码即可 AC。
