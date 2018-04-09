import React from 'react';
import Link from 'gatsby-link';

import SectionContainer from '../components/SectionContainer';
import SectionHeader from '../components/SectionHeader';
import WhiteBox from '../components/WhiteBox';

import { rhythm } from '../utils/typography';

export default ({data}) => {
  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
    },
    boxInner: {
      padding: rhythm(1),
      lineHeight: '2rem',
      ' h2': {
        borderLeft: '10px solid #5883D9',
        paddingLeft: '10px',
      },
      ' h3': {
        borderBottom: '1px dotted rgba(0,0,0,0.5)',
        fontSize: '1.2rem',
        paddingBottom: '5px',
      },
      ' h2, h3': {
        textAlign: 'left',
        margin: '2rem auto 1rem',
      },
      ' ul, li': {
        listStyleType: 'initial',
      },
      ' ul':{
        paddingLeft: '25px',
      },
      ' table': {
        width: 'auto',
      },
      ' img': {
        maxWidth: '500px',
        padding: '1rem',
      },
      ' code': {
        background: 'black',
        borderRadius: '5px',
        color: 'white',
        display: 'inline-block',
        padding: '1px 5px',
      },
      ' pre code': {
        display: 'block',
        overflow: 'scroll',
        padding: '20px',
      }
    },
    backButton: {
      background: '#fff',
      border: '2px solid #6292F1',
      borderRadius: '7px',
      boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
      color: '#6292F1',
      display: 'inline-block',
      padding: '5px 1rem',
      textDecoration: 'none',
      ':hover': {
        background: '#6292F1',
        color: '#fff',
        cursor: 'pointer',
      },
      ':first-child': {
        marginBottom: '2rem',
      },
      ':last-child': {
        marginTop: '2rem',
      }
    },
    link: {
      display: 'block',
      textDecoration: 'none',
      marginBottom: '2rem',
    },
    datetime: {
      color: '#999',
      display: 'block',
      marginBottom: '1rem',
    },
    title: {
      borderBottom: '1px dotted rgba(0,0,0,0.5)',
      marginBottom: '2rem',
      textAlign: 'left',
    },
    footer: {
      display: 'flex',
      marginTop: '2rem',
      padding: '2rem',

      '@media (max-width: 499px)': {
        flexDirection: 'column',
        ' img': {
          width: '100px',
          margin: '0 auto 2rem',
        },
        ' div p:first-child': {
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center',
        },
        ' div p:last-child': {
          fontSize: '0.8rem',
        },
        ' p': {
          marginBottom: 0,
        },
      },
      '@media (min-width: 500px)': {
        display: 'flex',
        ' img': {
          height: '100px',
          marginRight: '2rem',
        },
        ' div p:first-child': {
          fontWeight: 'bold',
          marginBottom: '1rem',
        },
        ' div p:last-child': {
          fontSize: '0.8rem',
        },
        ' p': {
          marginBottom: 0,
        }
      }
    }
  };

  const post = data.markdownRemark
  return (

    <SectionContainer colorNumber={1} isTop={true}>
      <SectionHeader colorNumber={1} text={'YUUNIWORKS ブログ'} />

      <div css={styles.container}>
      
      <Link to="/blog" css={styles.backButton}><span className="fas fa-arrow-left" /> 記事一覧に戻る</Link>

      <WhiteBox>
        <article css={styles.boxInner}>
          <time css={styles.datetime} dateTime={post.frontmatter.date}>
            {post.frontmatter.date.slice(0,10)}
          </time>
          <h1 css={styles.title}>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </WhiteBox>

      <WhiteBox>
        <footer css={styles.footer}>
          <img src="/images/profile.png" />
          <div>
            <p>田村 翔太</p>
            <p>YUUNIWORKS代表。島根県浜田市を拠点に主にフロントエンド開発のお手伝いをしているフリーランスエンジニアです。React/Reduxを用いたSingle Page Applicationや、NodeJSを使ったAPI開発を得意としています。</p>
          </div>
        </footer>
      </WhiteBox>

    
      <Link to="/blog" css={styles.backButton}><span className="fas fa-arrow-left" /> 記事一覧に戻る</Link>
      
      </div>



    </SectionContainer>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`