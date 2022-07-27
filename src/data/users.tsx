import {sortBy} from '@site/src/utils/jsUtils';

const Users: User[] = [
    {
      title: 'AgileTs',
      description: 'Global State and Logic Framework for reactive Applications',
      preview: require('https://d33wubrfki0l68.cloudfront.net/c088b7acfcf11100903c44fe44f2f2d7e0f30531/a52f4/zh-cn/img/docusaurus.svg'),
      website: 'https://agile-ts.org/',
      source: 'https://github.com/agile-ts/documentation',
    },
];

export type User = {
    title: string;
    description: string;
    preview: string;
    website: string;
    source: string | null;
  };
  
  function sortUsers() {
    let result = Users;
    // Sort by site name
    result = sortBy(result, (user) => user.title.toLowerCase());
    // Sort by favorite tag, favorites first
    return result;
  }
  
  export const sortedUsers = sortUsers();