import React from 'react'

import { Header } from '@components'
import { Post } from './components/Post'

import { getPostById } from '@/actions/get-post-by-id'

export default async function AnimePage({
  params
}: {
  params: {
    id: number
  }
}) {
  const post = await getPostById(params.id)

  const imgUrl = `https://shikimori.one/${post?.image?.original}`

  return (
    <>
      <Header isWithBackButton={true}>{post?.name}</Header>
      <div className="container">
        <h2 className="p-6">{post?.russian}</h2>
        <Post
          id={params.id}
          imgUrl={imgUrl}
          genres={post?.genres}
          episodes={post?.episodes}
          kind={post?.kind}
          status={post?.status}
          score={post?.score}
          licensors={post?.licensors}
          description={post?.description}
        />
      </div>
    </>
  )
}
