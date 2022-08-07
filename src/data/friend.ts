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
  {
    title: 'Misaka19215の小窝',
    description: '记录我的普通生活',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://misaka19215.cn/',
    website: 'https://misaka19215.cn/',
    tags: [ 'favorite' ],
  },
  {
    title: 'MOCEHU的博客',
    description: '记录我想记录的一切',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://mocehu.top',
    website: 'https://mocehu.cn',
    tags: [ 'favorite' ],
  },
  {
    title: 'Heartalborada’s Blog',
    description: '只是一位初中生罢了',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://blog.loliurl.club',
    website: 'https://blog.loliurl.club',
    tags: [ 'favorite','design' ],
  },
  {
    title: 'UXU倒计时的博客',
    description: '一个人的世界',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://www.uxudjs.top',
    website: 'https://www.uxudjs.top',
    tags: [ 'favorite' ],
  },
  {
    title: 'SeaYJ',
    description: '一个人的世界',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://seayj.cn/',
    website: 'https://seayj.cn/',
    tags: [ 'favorite','design' ],
  },
  {
    title: '泠风寒声の小站',
    description: '沉浸在Touch Fish的海洋中无法自拔',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://blog.lfhsheng.com/',
    website: 'https://blog.lfhsheng.com/',
    tags: [ 'favorite','design' ],
  },
  {
    title: '涅槃博客',
    description: '记录生活、分享世界。',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://love2wind.cn',
    website: 'https://love2wind.cn',
    tags: [ 'favorite','design' ],
  },
  {
    title: '萌 Hz',
    description: '一个随缘更新的 blog',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://www.moehz.com/',
    website: 'https://www.moehz.com/',
    tags: [ 'favorite','design' ],
  },
  {
    title: '小U',
    description: 'Science lights up the world',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://blog.starysky.top',
    website: 'https://blog.starysky.top',
    tags: [ 'favorite','design' ],
  },
  {
    title: 'hissin',
    description: '念念不忘，必有回响',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://hissin.cn/',
    website: 'https://hissin.cn/',
    tags: [ 'favorite','design' ],
  },
  {
    title: '马火星的秘密小屋',
    description: '可能有一些学习心得和日常',
    preview: 'https://image.thum.io/get/width/1920/crop/1080/allowJPG/wait/20/noanimate/https://blog.mayu8633.tk/',
    website: 'https://blog.mayu8633.tk/',
    tags: [ 'favorite','design' ],
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