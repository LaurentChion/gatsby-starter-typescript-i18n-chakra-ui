import React from "react"
import Link from "../components/Link"

import {Heading, Text} from '@chakra-ui/core'

import Layout from "../layouts/DefaultLayout"
import SEO from "../components/Seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Heading as="h2">Hi from the second page</Heading>
    <Text>Welcome to page 2</Text>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
