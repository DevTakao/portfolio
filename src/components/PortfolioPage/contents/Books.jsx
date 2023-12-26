const BookEntry = ({ title, author }) => {
  return (
    <div className="px-6 py-3">
      <h3 className="text-xl font-bold">{title}</h3>
      <h4 className="text-lg font-medium before:content-['Author:'] before:mr-1">{author}</h4>
    </div>
  );
};

const Books = () => {
  const books = [
    {
      title: "Ikigai: The Japanese Secret to a Long and Happy Life",
      author: "Hector Garcia",
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
    },
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
    },
    {
      title: "JavaScript: The Definitive Guide",
      author: "David Flanagan",
    },
    {
      title: "The TypeScript Handbook",
      author: "(Official Documentation)",
    },
    {
      title: "Effective TypeScript",
      author: "Dan Vanderkam",
    },
    {
      title: "Discover Three.js",
      author: "Lewy Blue",
    },
  ];

  return (
    <div className="relative text-left divide-y-2 divide-y-reverse divide-lightsoft">
      <h2 className="text-lg mb-6 sticky top-0 bg-light py-2">
        Here are some books that I have read and would recommend to my friends.
      </h2>
      {books.map((book, i) => (
        <BookEntry key={i} {...{ title: book.title, author: book.author }} />
      ))}
    </div>
  );
};

export default Books;
