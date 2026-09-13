import Banner from "@/components/homepage/Banner";
import AllBooks from "@/components/homepage/AllBooks";
import { getAllBooks } from "@/lib/books-api";

export default async function Homepage() {
  const books = await getAllBooks();

  return (
    <div>
      <Banner />
      <AllBooks books={books} />
    </div>
  );
}
