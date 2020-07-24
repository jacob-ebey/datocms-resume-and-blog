import Head from 'next/head'

import Container from '../components/container'
import HeroPost from '../components/hero-post'
import HeroSkills from '../components/hero-skills'
import Intro from '../components/intro'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { useAbFlag } from '../contexts/ab-flags'
import { getHomeData } from '../lib/api'

export default function Index({ allPosts, preview, header }) {
  const heroPost = allPosts?.[0]
  const morePosts = allPosts?.slice(1)

  const demoFlag = useAbFlag('demo-flag')
  console.log('Demo Flag:', demoFlag)

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Jacob</title>
        </Head>
        <Container>
          <Intro
            title={header.title}
            tagline={header.tagline}
          />

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
        </Container>

        <HeroSkills className="mb-20" />

        <Container>
          {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const { allPosts, header } = await getHomeData(preview)
  return {
    props: {
      allPosts,
      header,
      preview: preview || false,
    },
  }
}
