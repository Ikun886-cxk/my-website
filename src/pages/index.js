import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import "tailwindcss/tailwind.css";

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
           </div>
           </section> 

           <div class="mx-auto xl:px-12">
      <div class="flex mb-2 items-center mr-10 lg:mr-20 xl:mr-32">
        <div class="flex justify-center items-center mr-4 w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700">
        <img src="https://onedrive-vercel-index-beta-pearl.vercel.app/api/raw/?path=/wiki/gamepad-modern.svg" class="fa-duotone fa-gamepad-modern w-5 h-5 text-blue-600 dark:text-blue-500 lg:w-6 lg:h-6"/></div>
        <span class="text-xl font-bold dark:text-white">Game</span></div>
      </div>
 <div class="container mx-auto font-mono text-lg "><Translate>游戏及其周边的整合</Translate></div>
 <div class="lg:flex md:flex container mx-auto ">
 <Link to="/games/lvyunlu">     
<div class="max-w-sm lg:mx-4 md:mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="https://onedrive-vercel-index-beta-pearl.vercel.app/api/raw/?path=/wiki/Lvyunlu.webp" alt=""/>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Translate>履云录</Translate></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><Translate>战棋游戏《履云录》中，玩家将作为指挥官，与八位主角一起见证东海各国的兴衰。</Translate></p>
    </div>
</div>
</Link>
<Link to="/games/tavernofspear">
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="https://img.itch.zone/aW1nLzk2NjYyMjgucG5n/original/WFwGZ0.png" alt=""/>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Translate>矛之酒馆</Translate></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><Translate>你是来自失落之矛部落的年轻冒险家，你已经成年，准备证明自己是一名冒险家。</Translate></p>
    </div>
</div>
</Link>
</div>
<div class="mx-auto py-4 xl:px-12">
      <div class="flex -mb-2 items-center mr-10 lg:mr-20 xl:mr-32">
        <div class="flex justify-center items-center mr-4 w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700">
        <img src="https://onedrive-vercel-index-beta-pearl.vercel.app/api/raw/?path=/wiki/graduation-cap.svg" class="fa-duotone fa-gamepad-modern w-5 h-5 text-blue-600 dark:text-blue-500 lg:w-6 lg:h-6"/></div>
        <span class="text-xl font-bold dark:text-white">Study</span></div>
      </div>
 <div class="font-mono text-lg container mx-auto "><Translate>钉钉视频及知识文档</Translate></div>
 <div class="lg:flex md:flex container mx-auto ">
    <Link to="/study/English/unitone">     
<div class="max-w-sm lg:mx-4 md:mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="https://down.dingtalk.com/ddmedia/iAEKAqNqcGcDAATNBkAFzQOEBtoAI4QBpCEHBLICqim3UnrZOH1NOeIDzwAAAX-GCOo7BM4AG9t8BwAIAA.jpg" alt=""/>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Translate>unit 1 测试卷</Translate></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><Translate>英语一单元的单元测试卷</Translate></p>
    </div>
</div>
</Link>
 <Link to="/study/Computer/minecraftserver">
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,c_fill,w_720/https://lh5.googleusercontent.com/yIUhX0qoMqeG9uGFy2ACCI7OcWcNLcy7fXDaTghWaIJ4yg-CQEivb_zccxNKeNdua2eJgIvLOWR4Gf65i3VsOvumvVyVslqtd9WLstnihOHp_N24wuvWnRxflBT4vzzkhSuiNKfV" alt=""/>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Translate>搭建 Minecraft 服务器</Translate></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><Translate>教你如何在全平台搭建Minecraft 服务器</Translate></p>
    </div>
</div>
</Link>
<Link to="/study/Computer/vf4">     
<div class="max-w-sm lg:mx-4 md:mx-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg" src="https://down.dingtalk.com/ddmedia/iAELAqNqcGcDAATNBkAFzQOEBtoAI4QBpCE2P1gCqk2C-UmKLSgMgIYDzwAAAX-HtJagBM4AJVhKBwAIAA.jpg" alt=""/>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Translate>VF第四章</Translate></h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><Translate>Visual Foxpro第四章测试卷</Translate></p>
    </div>
</div>
</Link>
</div>          		 
    </Layout>
  );
}