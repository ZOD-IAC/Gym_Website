import React from "react";
import Image from "next/image";
import styles from "@/styles/indexBlog/IndexBlog.module.css";
import sampleImage from "../../../public/images/about2.jpg";
import Link from "next/link";

function BlogsCard({ data }) {
  return (
    <div className={styles.cards}>
      <Image
        src={data?.image ? data.image : sampleImage}
        alt="blog image"
        width={387.35}
        height={200}
        sizes="387px"
        className={styles.blogImage}
      />
      <div className={styles.blogContent}>
        <h2 className={styles.blogTitle}>
          {data?.title ? data.title : "Blog Title"}
        </h2>
        <p className={styles.blogDescription}>
          {data?.description
            ? data.description
            : "Short description of the blog post goes here. This is a brief preview of the content. Short description of the blog post goes here. This is a brief preview of the content. Short description of the blog post goes here. This is a brief preview of the content. Short description of the blog post goes here. This is a brief preview of the content.Short description of the blog post goes here. This is a brief preview of the content."}
        </p>
        <div className={styles.blogFooter}>
          <Link href={`/More/${data.title}`} className={styles.readMoreButton}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
