import React from 'react'

import {useSelector, useDispatch} from 'react-redux'

import {Select} from '@chakra-ui/core'
import {changeTheme} from '../features/theme'

export default function(){
    const themes = useSelector(state => state.themeFeature.themes)
    const dispatch = useDispatch()

    return <Select onChange={e => dispatch(changeTheme(e.target.value))}>
            {
                themes.map(
                    (name, i) => <option key={i} value={name}>{name}</option>
                )
            }
        </Select>
}