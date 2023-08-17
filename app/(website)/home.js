// app/website/home.js

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import posts from "./postsData"; // Relative path to your postsData.js

export default function Home() {
  return (
    <Container>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-4 xl:grid-cols-4">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md"
          >
            <div
              className="relative w-800 max-w-full"
              style={{ paddingBottom: "100%", overflow: "hidden" }}
            >
              <img
                src={post.imageSrc}
                alt={post.altText}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300"
                style={{ fontSize: "1rem" }}
              >
                {post.hoverLogo === "react" && (
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ fontSize: "0.5rem" }} // Adjust the size here
                  />
                )}
                {post.hoverLogo === "html-css-js" && (
                  <div>
                    {/* Your HTML, CSS, and JS icons */}
                  </div>
                )}
                <br />
              </div>
            </div>
          </a>
        ))}
      </div>
      {/* <div className="mt-4 flex flex-col items-center space-y-4">
        <Link
          href="/archive"
          className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
        >
          <span>View all Posts</span>
        </Link>
      </div> */}
    </Container>
  );
}
