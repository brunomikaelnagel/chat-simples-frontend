// React imports
import { ReactNode } from "react";

// Context
import { AppProvider } from "../../context/appContext";

export default function ContextProvider( { children }: { children: ReactNode } ){
    return(
        <AppProvider>
            {children}
        </AppProvider>
    )
}