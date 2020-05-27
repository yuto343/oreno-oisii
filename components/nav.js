import Link from "next/link";
import TwemojiElement from "./elements/TwemojiElement";
import { categories } from "../constants/categories";

export default function Nav({ params }) {
  return (
    <nav className="bg-white">
      <div className="pj-border-bottom shadow">
        <div className="w-10 mx-auto py-3">
          <TwemojiElement className="mx-auto my-3" emoji="🍽" />
        </div>
      </div>
      <ul className="flex py-3 pj-border-bottom justify-center">
        {categories.map((category, idx) => {
          const liClass =
            category.name === params
              ? "relative w-16 h-16 block pj-category-active flex justify-center items-center"
              : "relative w-16 h-16 block  flex justify-center items-center";
          return (
            <li key={idx} className="mx-1">
              <Link
                href="/category/[category]"
                as={`/category/${category.name}`}
              >
                <a className={liClass}>
                  <div className="p-3 bg-pink-200 rounded-full z-10 relative w-11/12 border-1 border-white ">
                    <TwemojiElement emoji={category.emoji} />
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
