import BookCard from "@/components/ui/BookCard";
import { Book } from "@/types/book";

const AllBooks = ({ books }: { books: Book[] }) => {
  return (
    <div className="my-12 container mx-auto">
      <h2 className="font-bold text-3xl text-center mb-6">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {books.map((book, ind) => {
          return <BookCard key={ind} book={book} />;
        })}
      </div>
    </div>
  );
};

export default AllBooks;
