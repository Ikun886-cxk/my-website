import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import "tailwindcss/tailwind.css"


const posts = [
	{
	  title: <Translate>履云录</Translate>,
	  href: '/games/lvyunlu',
	  category: { name: 'Game', href: '/games/lvyunlu' },
	  description:
		<Translate>战棋游戏《履云录》中，玩家将作为指挥官，与八位主角一起见证东海各国的兴衰。</Translate>,
	  imageUrl:
		'https://onedrive-vercel-index-beta-pearl.vercel.app/api/raw/?path=/wiki/Lvyunlu.webp',
	},
]	

const learn = [
	{
	  title: <Translate>unit 1 测试卷</Translate>,
	  href: '/study/English/unitone',
	  category: { name: 'Englishi', href: '/study/English/unitone' },
	  description:
		<Translate>一单元的单元测试卷</Translate>,
	  imageUrl:
		'https://down.dingtalk.com/ddmedia/iAEKAqNqcGcDAATNBkAFzQOEBtoAI4QBpCEHBLICqim3UnrZOH1NOeIDzwAAAX-GCOo7BM4AG9t8BwAIAA.jpg',
	},
]	

export default function Hello() {
  return (
    <Layout title="Hello" description="DragonJay's wiki">
     <section class="bg-white dark:bg-slate-800">
         <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
             <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                 <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">新</span> <span class="text-sm font-medium">看看此wiki的新特性</span> 
                 <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
             </Link>
             <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">DragonJay's wiki</h1>
             <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"><Translate>探索即将发生的过程</Translate></p>
             <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                 <Link to="/about" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                 <Translate>了解更多</Translate>
                     <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 </Link> 
             </div>               

			 <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </div>
				<Link to={post.href} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                     <Translate>查看</Translate>
                     <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 </Link> 
				</div>
				</div>
		    ))}
			</div>
      </div>
      </section>

      <section class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
      <div class="px-4 mx-auto max-w-8xl xl:px-12">
      <div class="flex items-center mr-10 mb-8 lg:mr-20 xl:mr-32">
        <div class="flex justify-center items-center mr-4 w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500 lg:w-6 lg:h-6"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg></div>
        <span class="text-xl font-bold text-gray-900 dark:text-white">Study</span></div>
      </div>

      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {learn.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </div>
				<Link to={post.href} class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                     <Translate>查看</Translate>
                     <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 </Link> 
				</div>
				</div>
		    ))}
			</div>
				</section>  
    </Layout>
  );
}