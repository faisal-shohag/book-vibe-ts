import { Book } from "@/types/book";

const getAllReadListFromLocalDB = (): Book[] => {
  if (typeof window === "undefined") return [];
  const allReadList = localStorage.getItem("readList");

  if (allReadList) return JSON.parse(allReadList);

  return [];
};

const addReadListToLocalDB = (book: Book) => {
  const allBooks = getAllReadListFromLocalDB();
  const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isAlreadyExist) {
    allBooks.push(book);
    localStorage.setItem("readList", JSON.stringify(allBooks));
  }
};

export { getAllReadListFromLocalDB, addReadListToLocalDB };
