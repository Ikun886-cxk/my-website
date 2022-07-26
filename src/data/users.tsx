import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

const Users: User[] = [
    {
      title: 'AgileTs',
      description: 'Global State and Logic Framework for reactive Applications',
      preview: require('./showcase/agilets.png'),
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
    result = sortBy(result, (user) => !user.tags.includes('favorite'));
    return result;
  }
  
  export const sortedUsers = sortUsers();