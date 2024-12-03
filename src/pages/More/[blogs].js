import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/BlogSlugPage/BlogSlugPage.module.css";
import sampleImage from "../../../public/images/Banners/bbgIAmge.jpg";
import Image from "next/image";
import Loader from "@/Component/Transitioin/Loader";

const Blogs = () => {
  const router = useRouter().query;
  const [data, setData] = useState();

  useEffect(() => {
    if (router.blogs !== "undefined") {
      const fetchData = async () => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/data?title=${router.blogs}`
        );
        const result = await res.json();
        setTimeout(() => {
          setData(result);
        }, 2000);
      };
      fetchData();
    }
  }, [router]);

  if (!data) {
    return <Loader />;
  }

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.pageTitle}>Blog Post</h1>
      {data.map((blog, idx) => {
        return (
          <div className={styles.blogWrapper} key={idx}>
            <div className={styles.imageContainer}>
              <Image
                src={blog?.image ? blog.image : sampleImage}
                alt={blog?.title}
                width={334}
                height={200}
                sizes=" @media (max-width : 786px ) 334px , 608px"
                className="h-full w-full object-cover"
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.SlugBlogTitle}>{blog?.title}</h3>
              <p className={styles.description}>{blog?.description}</p>
            </div>
            <p className={styles.description}>{blog?.content}</p>
            <div className="mt-10 flex flex-col gap-2 md:flex-row">
              {blog.tags.map((ele, idx) => {
                return (
                  <span
                    key={idx}
                    className=" py-2 px-3 border-[1px] rounded-sm"
                  >
                    #{ele}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
