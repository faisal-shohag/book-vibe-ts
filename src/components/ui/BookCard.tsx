import Link from "next/link";
import { FaRegStar } from "react-icons/fa";
import { Book } from "@/types/book";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Link
      href={`/bookDetails/${book.bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="p-6 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl h-[250px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 ">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 font-bold "
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{book.bookName}</h2>
        <p className="font-semibold text-lg">{book.author}</p>

        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
          <div className="font-semibold">{book.category}</div>
          <div className="flex gap-2 items-center ">
            {book.rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
