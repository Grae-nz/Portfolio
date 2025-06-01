"use client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function News() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  {/* Articles */}
  const allArticles = [
    {
      category: "Latest News",
      date: "08 May 2025",
      title: "Placeholder Title",
      description: "Placeholder desciption",
      href: "/news-stories/article1",
    },
    {
      category: "Latest News",
      date: "08 May 2025",
      title: "Placeholder Title",
      description: "Placeholder desciption",
      href: "/news-stories/article2",
    },
    {
      category: "Events",
      date: "29 Apr 2025",
      title: "Placeholder Title",
      description: "Placeholder desciption",
      href: "/news-stories/article3",
    },
    {
      category: "Events",
      date: "29 Apr 2025",
      title: "Placeholder Title",
      description: "Placeholder desciption",
      href: "/news-stories/article4",
    },
    {
      category: "Real Stories",
      date: "15 Apr 2025",
      title: "Placeholder Title",
      description: "Placeholder desciption",
      href: "/news-stories/article5",
    },
    {
      category: "Real Stories",
      date: "15 Apr 2025",
      title: "Placeholder Title",
      description: "Placeholder desciption",
      href: "/news-stories/article6",
    },
  ];

  const categories = ["All", "Latest News", "Events", "Real Stories"];

  const filteredArticles = useMemo(() => {
    if (!category || category === "All") return allArticles;
    return allArticles.filter((a) => a.category === category);
  }, [category]);

  return (
    <main className="bg-white pb-16">
      {/* Page header and image */}
      <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2 space-y-4 md:pl-8">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>News & Stories</h1>
          <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>For the latest prostate cancer news</h2>
          <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Browse news, events, and real stories from people effected by prostate cancer.</h3>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
        <img src="/images/newsstories.jpg" alt="News Stories Page Header Image" className="w-full h-full object-cover rounded-lg"/>
        </div>
      </div>

      {/* Categories filter */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat === "All" ? "/news-stories" : `/news-stories?category=${encodeURIComponent(cat)}`}
            className={`px-4 py-2 rounded shadow-md transition-colors duration-200 ${
              category === cat || (!category && cat === "All")
                ? "bg-[#00B0F0] text-white font-bold border-none"
                : "bg-white text-black font-normal border border-black"
            }`}
            style={{ fontFamily: 'Open Sans, sans-serif' }}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Articles layout */}
      <div className="text-black flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl">
          {filteredArticles.map((article, index) => (
            <a key={index} href={article.href}
            className="transition-transform duration-200 hover:scale-105 border rounded-md p-4 shadow-sm flex flex-col justify-between w-full max-w-xs"
            style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded mb-3 w-fit">{article.category}</span>
              <p className="text-sm text-gray-500 mb-1">{article.date}</p>
              <h2 className="text-lg font-bold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-700 mb-4">{article.description}</p>
              <span className="text-[#00B0F0] font-bold text-sm">Read Article</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
