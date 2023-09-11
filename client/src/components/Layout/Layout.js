import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'
import  { Toaster }  from "react-hot-toast";

const Layout = ({children, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
  <meta name="description" content={description} />
  <meta name="keywords" content= {keywords} />
  <meta name="author" content={author} />
        </Helmet>
        <Header/>
        <main style = {{minHeight: '70vh'}} >
        <Toaster />

        {children}
        </main>
        <Footer/>
    </div>
  )
}
Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "MERN STACK Project",
  keywords: "mern, react, node, mongodb",
  author: "Anil Gupta"
}
export default Layout