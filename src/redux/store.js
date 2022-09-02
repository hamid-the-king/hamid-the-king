import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from "./slices/employeeSlice";


export const store = configureStore({
    reducer: {
      em:employeeSlice
    },
})

// export type RootState = ReturnType<typeof store.getState>;