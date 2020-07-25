import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import HeroSkills from '../../components/hero-skills'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostData } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'

export default function Post({ header, post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header title={header?.title} />

        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Jacob
                </title>
                <meta property="og:image" content={post.ogImage.url} />

                <link rel="stylesheet" href="https://unpkg.com/highlight.js@10.1.2/styles/default.css" />
              </Head>

              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />

              <PostBody content={post.content} />
            </article>

            <SectionSeparator />

            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>

      <HeroSkills />
    </Layout>
  )
}

export async function getStaticProps({ params, preview }) {
  const data = await getPostData(params.slug, preview)

  return {
    props: {
      preview: preview || false,
      header: data.header,
      post: data.post,
      morePosts: data.morePosts || null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(post => `/posts/${post.slug}`) || [],
    fallback: true,
  }
}
