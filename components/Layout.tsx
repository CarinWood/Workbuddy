import { FC, ReactNode } from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"

type ChildrenProps = {
    children: ReactNode
  }

  
const Layout:FC<ChildrenProps> = ({children}) => {
  return (
    <>
        <Navbar/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout