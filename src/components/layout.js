import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="">
        <div className="flex justify-between">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <div className="pt-5">
          {/* <span className="p-3 px-10 font-bold border-solid border-2 border-emerald-500 rounded-md text-white bg-emerald-500 mr-5">Post a job</span> */}
          <Link to="https://blog.bigremotejobs.com" className="p-3 text-black px-10 border-solid border-2 border-black rounded-md">Discover jobs</Link>
        </div>
        </div>
      </div>
    )
  } else {
    header = (
      <div className="flex justify-between">
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <div className="pt-1">
          {/* <span className="p-3 px-10 border-solid border-2 border-emerald-500 rounded-md text-white bg-emerald-500 mr-5">Post a job</span> */}
          <Link to="https://blog.bigremotejobs.com" className="p-3 text-black px-10 border-solid border-2 border-black rounded-md">Discover jobs</Link>
          {/* <Link to="https://blog.bigremotejobs.com" className="p-3 align-middle whitespace-nowrap text-center px-10 font-bold border-solid border-2 border-emerald-500 rounded-md text-white bg-emerald-500 mr-5">Post a job</Link> */}
        </div>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
