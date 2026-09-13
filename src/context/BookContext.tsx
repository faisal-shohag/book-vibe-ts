"use client";

import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  addReadListToLocalDB,
  getAllReadListFromLocalDB,
} from "@/utils/localDB";
import { Book } from "@/types/book";

interface BookContextType {
  readList: Book[];
  setReadList: React.Dispatch<React.SetStateAction<Book[]>>;
  handleMarkAsRead: (currentBook: Book) => void;
  wishList: Book[];
  setWishList: React.Dispatch<React.SetStateAction<Book[]>>;
  handleWishList: (currentBook: Book) => void;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined,
);

const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [readList, setReadList] = useState<Book[]>([]);
  const [wishList, setWishList] = useState<Book[]>([]);

  useEffect(() => {
    setReadList(getAllReadListFromLocalDB());
  }, []);

  const handleMarkAsRead = (currentBook: Book) => {
    // step 1: store book id or store book object
    // step 2: where to store
    // step 2: array or collection
    //  step 3: If the book is already exist then show a alert or toast
    // step 4: if not then add the book in the array or collection

    addReadListToLocalDB(currentBook);

    const isExistBook = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setReadList([...readList, currentBook]);
      toast.success(`${currentBook.bookName} is added to read list`);
    }
  };

  const handleWishList = (currentBook: Book) => {
    // step 1: store book id or store book object
    // step 2: where to store
    // step 2: array or collection
    //  step 3: If the book is already exist then show a alert or toast
    // step 4: if not then add the book in the array or collection

    const isExistInReadList = readList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistInReadList) {
      toast.error("This book is already in read list");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );

    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is added to wish list`);
    }
  };

  const data = {
    readList,
    setReadList,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
