export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'javascript'

export type Friend = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  javascript: {
    label: 'JavaScript',
    description: 'JavaScript 项目',
    color: '#dfd545',
  },
}

const Friends: Friend[] = [
  {
    title: '月琳cc',
    description: '记录技术与生活的摸鱼博客',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://yleen.cc/',
    website: 'https://yleen.cc',
    tags: ['design', 'favorite'],
  },
  {
    title: '青山小站',
    description: '一个在帝都搬砖的新时代农民工所建立的一个小破站，主要是分享一些生活、摄影、学习、工作上的一些知识。',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://blog.yanqingshan.com/',
    website: 'https://blog.yanqingshan.com/',
    tags: [ 'favorite' ],
  },
  {
    title: '老陈の咸鱼日常',
    description: 'Life is fantanstic.',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://www.fantanstic.top/',
    website: 'https://www.fantanstic.top/',
    tags: [ 'favorite' ],
  },
]

export const TagList = Object.keys(Tags) as TagType[]
function sortFriend() {
  let result = Friends
  // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  // result = sortBy(result, (user) => !user.tags.includes('javascript'));
  return result
}

export const sortedFriends = sortFriend()