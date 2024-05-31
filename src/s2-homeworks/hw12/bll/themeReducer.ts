const initState = {
    themeId: 1 as number,
}

type ThemeType = typeof initState

export const themeReducer = (state: ThemeType = initState, action: ThemeAction): ThemeType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}


export type  ChangeThemeIdAT = ReturnType<typeof changeThemeIdAС>
export const changeThemeIdAС = (id: number) => ({type: 'SET_THEME_ID', id} as const)

export type ThemeAction = ChangeThemeIdAT