import { Link } from "gatsby";
import React from "react";
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid'

export default function PageNav({pageContext }) {
  const { numPages, currentPage } = pageContext;
  if (!numPages || !currentPage) return null;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prev = currentPage === 2 ? "/" : `/page/${currentPage - 1}`;
  const next = currentPage + 1;

  return (
    <div className="flex justify-center m-20">
        {!isFirst && (
            <Link className="inline-block mr-10 text-2xl font-extrabold" to={prev} rel="prev">
                <ArrowSmallLeftIcon className="h-6 w-6 inline"></ArrowSmallLeftIcon> Newer posts
            </Link>
        )}
        {
            <span className="text-2xl font-extrabold">Page {currentPage} of {numPages}</span>
        }

        {!isLast && (
            <Link className="inline-block ml-10 text-2xl font-extrabold" to={`/page/${next}`} rel="next">
                <div >Older posts<ArrowSmallRightIcon className="h-6 w-6 inline"></ArrowSmallRightIcon></div>
            </Link>
        )}

      {/* <div>
        {!isFirst && (
          <span style={{marginRight: "20px"}}>
            <Link to={prev} rel="prev">
              <ArrowSmallLeftIcon className="h-6 w-6"></ArrowSmallLeftIcon> Newer posts
            </Link>
          </span>
        )}

        {!isLast && (
          <span style={{marginLeft: "20px", display: "flex", flexDirection:"row"}} className="flex">
            <Link  to={`/page/${next}`} rel="next">
                <div >Older posts<ArrowSmallRightIcon className="h-6 w-6"></ArrowSmallRightIcon></div>
            </Link>
          </span>
        )}
      </div> */}
    </div>
  );
}