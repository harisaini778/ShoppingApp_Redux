import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import UiSlice from "./ui-slice";

const Store =configureStore({
    reducer: {
        ui: UiSlice.reducer,
        
    }
})
export default Store;