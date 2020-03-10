import themes from '../themes/index'

// INITIAL STATE
const initialState = {
    theme: themes.default,
    themes: Object.keys(themes)
}

const CHANGE_THEME = "theme.change"

// ACTIONS
export const changeTheme = (name) => ({ type: CHANGE_THEME, name })

// REDUCER
export function reducer(state = initialState, action) {
    switch (action.type) {
      case CHANGE_THEME :
            return {
                ...state,
                theme: themes[action.name],
            }
      default:
        return state;
    }
}