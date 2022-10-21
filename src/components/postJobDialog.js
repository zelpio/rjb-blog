/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const PostJob = () => {

  return (
    <div className="bg-emerald-50 shadow-sm p-10 rounded-md flex align-middle">
      <div className="pr-4">
        <div className="text-2xl font-black opacity-90">Hire remote developers from around the world 👋 </div>
        <div className="text-md mt-2 opacity-80">Get hundreds of matching profiles of pre-vetted remote developers delivered right into your inbox or your favorite ATS.</div>
      </div>
      <div className="block w-40 pt-6 align-middle">
        <Link to="https://blog.bigremotejobs.com" className="p-3 text-lg align-middle whitespace-nowrap text-center px-10 font-bold border-solid border-2 border-emerald-500 rounded-md text-white bg-emerald-500 mr-5">Post a job</Link>
      </div>
      
    </div>
  )
}

export default PostJob
