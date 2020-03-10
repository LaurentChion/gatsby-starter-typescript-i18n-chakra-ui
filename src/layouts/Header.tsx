import React from "react"
import {Heading, Flex} from '@chakra-ui/core'

import Link from "../components/Link"
import ThemeSwitcher from "../components/ThemeSelector"
import ColorModeSwitcher from "../components/ColorModeSwitcher"

import LanguageSelector from './LanguageSelector'

interface Props {
  siteTitle: string
}

function Header({ siteTitle }: Props){
  return (
    <header
    >
      <Flex
        p="4"
        justifyContent="space-between"
        alignItems="center"
        bg="purple.500"
      >
        <Link
          to="/"
        >
          <Heading as="h1"
          >
              {siteTitle}
          </Heading>
        </Link>

        <Flex>
          <LanguageSelector />
          <Flex direction="column">
            <ThemeSwitcher/>
            <ColorModeSwitcher/>
          </Flex>
        </Flex>
      </Flex>
    </header>
  )
}

export default Header
