/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, { useState, useMemo, useEffect } from 'react'

 import Layout from '@theme/Layout'
 import clsx from 'clsx'
 import Translate, {translate} from '@docusaurus/Translate';
 
 import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon'
 import ShowcaseTagSelect, { readSearchTags } from './_components/ShowcaseTagSelect'
 import ShowcaseFilterToggle, { type Operator, readOperator } from './_components/ShowcaseFilterToggle'
 import ShowcaseCard from './_components/ShowcaseCard'
 import { sortedFriends, Tags, TagList, type Friend, type TagType } from '@site/src/data/friend'
 import ShowcaseTooltip from './_components/ShowcaseTooltip'
 
 import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
 import { useHistory, useLocation } from '@docusaurus/router'
 
 import styles from './styles.module.css'
 
 const TITLE = translate({message: '友情链接'});
 const DESCRIPTION = translate({
  message: '申请友链请点击下方申请，熟人可直接找我~',
});
 const GITHUB_URL = 'https://github.com/SurpriseLon/my-website/issues'
 
 type FriendState = {
   scrollTopPosition: number
   focusedElementId: string | undefined
 }
 
 function restoreFriendState(FriendState: FriendState | null) {
   const { scrollTopPosition, focusedElementId } = FriendState ?? {
     scrollTopPosition: 0,
     focusedElementId: undefined,
   }
   document.getElementById(focusedElementId)?.focus()
   window.scrollTo({ top: scrollTopPosition })
 }
 
 export function prepareUserState(): FriendState | undefined {
   if (ExecutionEnvironment.canUseDOM) {
     return {
       scrollTopPosition: window.scrollY,
       focusedElementId: document.activeElement?.id,
     }
   }
 
   return undefined
 }
 
 const SearchNameQueryKey = 'name'
 
 function readSearchName(search: string) {
   return new URLSearchParams(search).get(SearchNameQueryKey)
 }
 
 function filterUsers(users: Friend[], selectedTags: TagType[], operator: Operator, searchName: string | null) {
   if (searchName) {
     // eslint-disable-next-line no-param-reassign
     users = users.filter((user) => user.title.toLowerCase().includes(searchName.toLowerCase()))
   }
   if (selectedTags.length === 0) {
     return users
   }
   return users.filter((user) => {
     if (user.tags.length === 0) {
       return false
     }
     if (operator === 'AND') {
       return selectedTags.every((tag) => user.tags.includes(tag))
     } else {
       return selectedTags.some((tag) => user.tags.includes(tag))
     }
   })
 }
 
 function useFilteredFriends() {
   const location = useLocation<FriendState>()
   const [operator, setOperator] = useState<Operator>('OR')
   // On SSR / first mount (hydration) no tag is selected
   const [selectedTags, setSelectedTags] = useState<TagType[]>([])
   const [searchName, setSearchName] = useState<string | null>(null)
   // Sync tags from QS to state (delayed on purpose to avoid SSR/Client hydration mismatch)
   useEffect(() => {
     setSelectedTags(readSearchTags(location.search))
     setOperator(readOperator(location.search))
     setSearchName(readSearchName(location.search))
     restoreFriendState(location.state)
   }, [location])
 
   return useMemo(() => filterUsers(sortedFriends, selectedTags, operator, searchName), [selectedTags, operator, searchName])
 }
 
 function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer">
        <Translate id="showcase.header.button">
          🙏 添加友链
        </Translate>
      </a>
    </section>
  );
}
 
 function ShowcaseFilters() {
   const filteredUsers = useFilteredFriends()
   return (
     <section className='container margin-top--l margin-bottom--lg'>
       <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
         <div>
           <h2>Filters</h2>
           <span>{`(${filteredUsers.length} site${filteredUsers.length > 1 ? 's' : ''})`}</span>
         </div>
         <ShowcaseFilterToggle />
       </div>
       <ul className={styles.checkboxList}>
         {TagList.map((tag, i) => {
           const { label, description, color } = Tags[tag]
           const id = `showcase_checkbox_id_${tag}`
 
           return (
             <li key={i} className={styles.checkboxListItem}>
               <ShowcaseTooltip id={id} text={description} anchorEl='#__docusaurus'>
                 <ShowcaseTagSelect
                   tag={tag}
                   id={id}
                   label={label}
                   icon={
                     tag === 'favorite' ? (
                       <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                     ) : (
                       <span
                         style={{
                           backgroundColor: color,
                           width: 10,
                           height: 10,
                           borderRadius: '50%',
                           marginLeft: 8,
                         }}
                       />
                     )
                   }
                 />
               </ShowcaseTooltip>
             </li>
           )
         })}
       </ul>
     </section>
   )
 }
 
 function SearchBar() {
   const history = useHistory()
   const location = useLocation()
   const [value, setValue] = useState<string | null>(null)
   useEffect(() => {
     setValue(readSearchName(location.search))
   }, [location])
   return (
     <div className={styles.searchContainer}>
       <input
         id='searchbar'
         placeholder='搜索友链'
         value={value ?? undefined}
         onInput={(e) => {
           setValue(e.currentTarget.value)
           const newSearch = new URLSearchParams(location.search)
           newSearch.delete(SearchNameQueryKey)
           if (e.currentTarget.value) {
             newSearch.set(SearchNameQueryKey, e.currentTarget.value)
           }
           history.push({
             ...location,
             search: newSearch.toString(),
             state: prepareUserState(),
           })
           setTimeout(() => {
             document.getElementById('searchbar')?.focus()
           }, 0)
         }}
       />
     </div>
   )
 }
 
 function ShowcaseCards() {
   const filteredUsers = useFilteredFriends()
 
   if (filteredUsers.length === 0) {
     return (
       <section className='margin-top--lg margin-bottom--xl'>
         <div className='container padding-vert--md text--center'>
           <h2>No result</h2>
           <SearchBar />
         </div>
       </section>
     )
   }
 
   return (
     <section className='margin-top--lg margin-bottom--xl'>
       {filteredUsers.length === sortedFriends.length ? (
         <>
           <div className='container margin-top--lg'>
             <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
               <h2>所有友链</h2>
               <SearchBar />
             </div>
 
             <ul className={styles.showcaseList}>
               {sortedFriends.map((user) => (
                 <ShowcaseCard key={user.title} user={user} />
               ))}
             </ul>
           </div>
         </>
       ) : (
         <div className='container'>
           <div className={clsx('margin-bottom--md', styles.showcaseFavoriteHeader)}>
             <h2>所有友链</h2>
             <SearchBar />
           </div>
           <ul className={styles.showcaseList}>
             {filteredUsers.map((user) => (
               <ShowcaseCard key={user.title} user={user} />
             ))}
           </ul>
         </div>
       )}
     </section>
   )
 }
 
 function Showcase(): JSX.Element {
   return (
     <Layout title={TITLE} description={DESCRIPTION}>
       <main className='margin-vert--lg'>
         <ShowcaseHeader />
         {/* <ShowcaseFilters /> */}
         <ShowcaseCards />
       </main>
     </Layout>
   )
 }
 
 export default Showcase