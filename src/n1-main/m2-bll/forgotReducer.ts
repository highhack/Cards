import {Dispatch} from 'redux'
import {AC} from './reducer1';
import {cardAPI} from './api';


const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: true,
    email: null,
}

//Reducer
export const forgotReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'CARDS/FORGOT-PASSWOR':
            return {...state, email: action.email}
        case 'CARDS/SET-APP-STATUS':
            return {...state, status: action.status}
        case 'CARDS/SET-APP-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

// actions
const forgotPasswordAC = (email: string) => ({
    type: 'CARDS/FORGOT-PASSWOR',
    email
} as const)

const setAppStatusAC = (status: RequestStatusType) => ({
    type: 'CARDS/SET-APP-STATUS',
    status
} as const)

const setAppErrorAC = (error: string | null) => ({
    type: 'CARDS/SET-APP-ERROR',
    error
} as const)


// thunks
export const forgotPasswordTC = (email: string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(setAppStatusAC('loading'))
        cardAPI.forgotPassword(email)
            .then((res: any) => {
                dispatch(forgotPasswordAC(res.data))
            }).catch(e => {
            dispatch(setAppErrorAC(e))
        }).finally(() => dispatch(setAppStatusAC('failed'))
        )

    }
}


// types
type ActionsType =
    | ReturnType<typeof forgotPasswordAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof setAppErrorAC>

type ThunkDispatch = Dispatch<ActionsType>

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

type InitialStateType = {
    // is there any interaction with the server now
    status: RequestStatusType
    // if a global error happen, we will write the error text here
    error: string | null
    // true when the application was initialized (checked the user, got the settings, etc.)
    isInitialized: boolean

    email: null | string
}