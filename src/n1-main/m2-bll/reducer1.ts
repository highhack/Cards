import {Dispatch} from 'redux'

const initialState: any  = []

export const reducer1 = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'TYPE':
            return {...state}
        default:
            return state
    }
}

// actions
export const AC = (id: string) => ({type: 'TYPE', id} as const)


// thunks
export const TC = () => {
    return (dispatch: ThunkDispatch) => {
        // API.getTodolists()
        //     .then((res: any) => {
        //         dispatch(AC(res.data))
        //         dispatch(AC(''))
        //     })
    }
}

// types
export type ACType = ReturnType<typeof AC>;
type ActionsType =
    | ACType

type ThunkDispatch = Dispatch<ActionsType>