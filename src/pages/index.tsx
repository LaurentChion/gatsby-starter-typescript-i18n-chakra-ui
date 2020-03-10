import React from "react"

import {Box, Flex, Text, Heading} from '@chakra-ui/core'

import Link  from "../components/Link"
import Layout from "../layouts/DefaultLayout"
import Image from "../components/Image"
import SEO from "../components/Seo"

import { useIntl } from "gatsby-plugin-intl"

export default function(){
  const intl = useIntl()
  return (
    <Layout>
    <SEO title={intl.formatMessage({ id: "title" })} />
    <Flex justify="space-around" align="center">

      <Box>
        <Heading as="h1">
          {intl.formatMessage({ id: "hello" })}
        </Heading>
        <Text>{intl.formatMessage({ id: "welcome" })}</Text>
        <Text>{intl.formatMessage({ id: "build" })}</Text>
      </Box>

      <Box style={{ minWidth: "300px", maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </Box>
    </Flex>
    <Link to="/page-2/">{intl.formatMessage({ id: "go_page2" })}</Link>
  </Layout>
  )
}
