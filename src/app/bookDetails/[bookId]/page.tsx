import { notFound } from "next/navigation";
import { getBookById } from "@/lib/books-api";
import BookDetailsView from "@/components/bookDetails/BookDetailsView";

const BookDetails = async ({
  params,
}: {
  params: Promise<{ bookId: string }>;
}) => {
  const { bookId } = await params;
  const book = await getBookById(bookId);

  if (!book) {
    notFound();
  }

  return <BookDetailsView book={book} />;
};

export default BookDetails;
