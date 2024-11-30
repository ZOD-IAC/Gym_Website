import React from "react";
import BlogsCard from "./BlogsCard";
import styles from "@/styles/indexBlog/IndexBlog.module.css";
import blogs from "@/pages/Data/blog.json";
import Link from "next/link";

function IndexBlog() {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Blogs</h3>
      <div className={styles.blogContainer}>
        {blogs.slice(0, 3).map((ele, idx) => {
          return <BlogsCard data={ele} key={idx} />;
        })}
      </div>
      <Link
        href="/More#blogs"
        className="w-full pl-10 mt-5 text-[#ff9500] text-xl"
      >
        Show More..
      </Link>
    </div>
  );
}

export default IndexBlog;
