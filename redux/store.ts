import { configureStore } from '@reduxjs/toolkit'
import { handleStateSlice } from './features/handleState'

export const store = configureStore({
  reducer: {
    handleState: handleStateSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch