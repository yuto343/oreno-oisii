import Link from "next/link";
import TwemojiElement from "./elements/TwemojiElement";

const links = [
  { href: "https://github.com/zeit/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

export default function Nav() {
  const categories = [
    {
      name: "pork",
      emoji: "🐖",
    },
    {
      name: "beef",
      emoji: "🐂",
    },
    {
      name: "chiken",
      emoji: "🐓",
    },
    {
      name: "other",
      emoji: "🍳",
    },
  ];

  return (
    <nav className="bg-white">
      <div className="pj-border-bottom shadow">
        <div className="w-10 mx-auto py-3">
          <TwemojiElement className="mx-auto my-3" emoji="🍽" />
        </div>
      </div>
      <ul className="flex py-3 pj-border-bottom">
        {categories.map((category, idx) => {
          return (
            <li
              className="w-16 border p-3 pj-category-border-color rounded-full mx-1 "
              key={idx}
            >
              <TwemojiElement emoji={category.emoji} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
