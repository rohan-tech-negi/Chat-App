import {configureStore} from "@reduxjs/toolkit";
import {useDispatch as useAppDispatch, useSelector as useAppSelector} from "react-redux"

const store = configureStore({
    reducer: {}
})

export {store}