import { ApiResponse, Book } from "@/types/book";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://phi-lab-server-three.vercel.app/api/v1/lab";

export const getAllBooks = async (): Promise<Book[]> => {
  const res = await fetch(`${BASE_URL}/books`, { cache: "no-store" });
  const json: ApiResponse<Book[]> = await res.json();
  return json.data;
};

export const getBookById = async (bookId: string | number): Promise<Book | null> => {
  const res = await fetch(`${BASE_URL}/books/${bookId}`, { cache: "no-store" });
  if (res.status === 404) return null;
  const json: ApiResponse<Book> = await res.json();
  return json.data;
};

export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/books/categories`, { cache: "no-store" });
  const json: ApiResponse<string[]> = await res.json();
  return json.data;
};

export const getBooksByCategory = async (category: string): Promise<Book[]> => {
  const res = await fetch(`${BASE_URL}/books/category/${category}`, {
    cache: "no-store",
  });
  if (res.status === 404) return [];
  const json: ApiResponse<Book[]> = await res.json();
  return json.data;
};
