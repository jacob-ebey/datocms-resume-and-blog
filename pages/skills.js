import Head from 'next/head'

import Container from '../components/container'
import Header from '../components/header'
import Layout from '../components/layout'
import SectionSeparator from '../components/section-separator'
import SkillList from '../components/skill-list'
import { getSkillsData } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'

export default function Skills({ preview, header, page }) {
  const { title, tagline, skills } = page

  return (
    <>
      <Layout preview={preview} skills={false}>
        <Head>
          <title>Skills | Jacob</title>
        </Head>
        <Container>
          <Header title={header?.title} />

          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            {title}
          </h2>
          {tagline && (
            <p className="text-lg leading-relaxed mb-8">{tagline}</p>
          )}

          <SectionSeparator />

          <SkillList skills={skills} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview }) {
  const { header, skillpage } = await getSkillsData(preview)

  return {
    props: {
      header,
      page: {
        ...skillpage,
        skills: await Promise.all(skillpage.skills.map(async skill => ({
          ...skill,
          details: (skill.details && await markdownToHtml(skill.details)) || null,
        }))),
      },
      preview: preview || false,
    },
  }
}
