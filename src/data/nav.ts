export interface NavItem {
  title: string;
  slug: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const sidebar: NavGroup[] = [
  {
    title: '总标题测试1',
    items: [
      { title: '测试1', slug: 'a' },
      { title: '测试2', slug: 'b' },
    ],
  },
  {
    title: '数据结构(测试用还无内容)',
    items: [
      { title: '数组(测试用还无内容)', slug: 'array' },
      { title: '链表(测试用还无内容)', slug: 'linked-list' },
      { title: '栈(测试用还无内容)', slug: 'stack' },
      { title: '队列(测试用还无内容)', slug: 'queue' },
      { title: '二叉树(测试用还无内容)', slug: 'binary-tree' },
    ],
  },
  {
    title: '图论(测试用还无内容)',
    items: [
      { title: 'DFS(测试用还无内容)', slug: 'dfs' },
      { title: 'BFS(测试用还无内容)', slug: 'bfs' },
      { title: '最短路径 Dijkstra', slug: 'dijkstra' },
    ],
  },
  {
    title: '数学(测试用还无内容)',
    items: [
      { title: '质数(测试用还无内容)', slug: 'prime' },
      { title: '快速幂(测试用还无内容)', slug: 'fast-pow' },
    ],
  },
];
