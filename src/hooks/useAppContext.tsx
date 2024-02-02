// React imports
import { useContext } from "react"

//Context
import { AppContext } from "../context/appContext"

export function useAppContext(){
    return useContext(AppContext)
}