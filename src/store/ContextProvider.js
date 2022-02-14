import { NavbarProvider } from './NavbarContext'

const ContextProvider = ({ children }) => {
   return <NavbarProvider>{children}</NavbarProvider>
}

export default ContextProvider
