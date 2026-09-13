"use client";

import { useContext, useEffect, useState } from "react";
import { BookContext } from "@/context/BookContext";
import BookCard from "@/components/ui/BookCard";
import { Book } from "@/types/book";

const ListedWishList = ({ sortingType }: { sortingType: string }) => {
  const { wishList } = useContext(BookContext)!;

  const [filteredWishList, setFilteredWishList] = useState<Book[]>(wishList);

  useEffect(() => {
    if (sortingType) {
      if (sortingType === "pages") {
        const sortedData = [...wishList].sort(
          (a, b) => a.totalPages - b.totalPages,
        );
        setFilteredWishList(sortedData);
      } else if (sortingType === "rating") {
        const sortedData = [...wishList].sort((a, b) => a.rating - b.rating);
        setFilteredWishList(sortedData);
      }
    } else {
      setFilteredWishList(wishList);
    }
  }, [sortingType, wishList]);

  if (filteredWishList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center ">
        <h2 className="font-bold text-3xl">No wish list data found</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredWishList.map((book, ind) => (
          <BookCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedWishList;
