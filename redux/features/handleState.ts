import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HandleState {
    inputText: string;
    bgColor: string;
    textColor: string;
    level: string;
    borderSize: number;
    scale: number;
    mask: number;
    version: string;
    characterCount: number;
    outputFormat: string;
}

const initialState: HandleState = {
    inputText: '',
    bgColor: '#ffffff',
    textColor: '#141926',
    level: 'L',
    borderSize: 16,
    scale: 4,
    mask: -1,
    version: "1",
    characterCount: 0,
    outputFormat: 'bitmap',
}

export const handleStateSlice = createSlice({
    name: 'handleState',
    initialState,
    reducers: {
        setInputText: (state, action: PayloadAction<string>) => {
            state.inputText = action.payload
        },
        setBgColor: (state, action: PayloadAction<string>) => {
            state.bgColor = action.payload
        },
        setTextColor: (state, action: PayloadAction<string>) => {
            state.textColor = action.payload
        },
        setLevel: (state, action: PayloadAction<string>) => {
            state.level = action.payload
        },
        setBorderSize: (state, action: PayloadAction<number>) => {
            state.borderSize = action.payload
        }, 
        setScale: (state, action: PayloadAction<number>) => {
            state.scale = action.payload
        },
        setMask: (state, action: PayloadAction<number>) => {
            state.mask = action.payload
        },
        setVersion: (state, action: PayloadAction<string>) => {
            state.version = action.payload
        },
        setCharacterCount: (state, action: PayloadAction<number>) => {
            state.characterCount = action.payload
        },
        setOutputFormat: (state, action: PayloadAction<string>) => {
            state.outputFormat = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setBgColor, setInputText, setLevel, setTextColor, setBorderSize, setScale, setMask, setVersion,setCharacterCount, setOutputFormat } = handleStateSlice.actions

export default handleStateSlice.reducer