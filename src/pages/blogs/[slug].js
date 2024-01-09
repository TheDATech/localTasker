import React from 'react'
import Head from 'next/head';
import { BlogDetail } from '../../BlogDetail/BlogDetail';
import { Subcribe } from '../../Component/share/Subcribe';
import { MobileSubcribe } from '../../Component/share/mobileSubcribe';

const PostPage = () => {
  return (
    <>
      <BlogDetail/>
      <div className='desktopboxdisplay'><Subcribe/></div>
      <MobileSubcribe/>
    </>
  )
}

export default PostPage