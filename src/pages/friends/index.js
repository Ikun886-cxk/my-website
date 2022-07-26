import React from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import styles from './styles.module.css'


const TITLE = '友情链接'
const DESCRIPTION = '申请友链请点击下方申请，熟人可直接找我~'
const ADD_FRIEND_URL = 'https://github.com/kuizuo/blog/edit/main/src/data/friend.tsx'


export default function Hello() {
    return ( 
        <Layout title="Hello" description="Hello React Page">
    <section className='margin-top--lg margin-bottom--lg text--center'>
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a className='button button--primary' href={ADD_FRIEND_URL} target='_blank' rel='noreferrer'>
        申请友链
      </a>
    </section>   
        </Layout>
        
     );
}
