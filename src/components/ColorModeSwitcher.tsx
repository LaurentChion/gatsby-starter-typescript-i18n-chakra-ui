import React from 'react'
import {IconButton, useColorMode} from '@chakra-ui/core'

export default function(){
    const {colorMode, toggleColorMode} = useColorMode()
    const opposite = colorMode === "light" ? "dark" : "light"
    const icon = colorMode === "light" ? "sun" : "moon"
    
    return <IconButton
            aria-label={`Switch to ${opposite} mode`}
            icon={icon}
            onClick={toggleColorMode}
        />
}