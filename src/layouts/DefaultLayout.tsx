/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Link, ThemeProvider, CSSReset, ColorModeProvider} from '@chakra-ui/core'
import {Provider, useSelector} from 'react-redux'

import store from '../features'

import Header from "./Header"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = useSelector(state => state.themeFeature.theme)

  return (
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset/>
          <Header siteTitle={data.site.siteMetadata.title} />

          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <Link
              href="https://www.gatsbyjs.org"
            >
              Gatsby
            </Link>
          </footer>
        </ColorModeProvider>
      </ThemeProvider>
  )
}


export default function({children}) {
  return (
    <Provider store={store}>
      <Layout>
        {children}
      </Layout>
    </Provider>
  )
}
