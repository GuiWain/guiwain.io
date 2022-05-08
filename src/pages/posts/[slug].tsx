import { GetStaticPaths, GetStaticProps } from 'next/types'

import TemplatePost, { PostProps } from 'templates/Post'
import * as m from 'templates/Post/mockPost'
import { FooterModifiers } from 'components/Footer'

import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

type Post = {
  footer?: FooterModifiers
} & PostProps

const Post = (props: Post) => <TemplatePost {...props} />

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = ['1', '2', '3']

  const paths = allPosts.map((post) => ({
    params: { slug: post }
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const window = new JSDOM('').window
  const DOMPurify = createDOMPurify(window)

  const slug =
    context.params.slug == '1' ||
    context.params.slug == '2' ||
    context.params.slug == '3'
      ? context.params.slug
      : ''

  switch (slug) {
    case '1': {
      const handleContent = m.post.content
      const sanitizedContent = DOMPurify.sanitize(handleContent)

      const newPost = {
        title: m.post.title,
        resume: m.post.resume,
        slug: m.post.slug,
        content: sanitizedContent,
        date: m.post.date,
        reading_time: m.post.reading_time,
        updateDate: m.post.updateDate
      }

      return { props: { ...newPost, footer: 'minimal' } }
    }
    case '2': {
      const handleContent = m.post2.content
      const sanitizedContent = DOMPurify.sanitize(handleContent)

      const newPost = {
        title: m.post2.title,
        resume: m.post2.resume,
        slug: m.post2.slug,
        content: sanitizedContent,
        date: m.post2.date,
        reading_time: m.post2.reading_time,
        updateDate: m.post2.updateDate
      }

      return { props: { ...newPost, footer: 'minimal' } }
    }
    case '3': {
      const handleContent = m.post3.content
      const sanitizedContent = DOMPurify.sanitize(handleContent)

      const newPost = {
        title: m.post3.title,
        resume: m.post3.resume,
        slug: m.post3.slug,
        content: sanitizedContent,
        date: m.post3.date,
        reading_time: m.post3.reading_time,
        updateDate: m.post3.updateDate
      }

      return { props: { ...newPost, footer: 'minimal' } }
    }
    default: {
      return { props: { footer: 'minimal' } }
    }
  }
}
