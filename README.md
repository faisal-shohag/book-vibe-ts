# Books API Reference

Base URL: `https://phi-lab-server-three.vercel.app/api/v1/lab`


## Data Shape

### Book
| Field            | Type     | Notes                    |
|------------------|----------|--------------------------|
| bookId           | number   |                          |
| bookName         | string   |                          |
| author           | string   |                          |
| image            | string   | cover image URL          |
| review           | string   | long-form review text    |
| totalPages       | number   |                          |
| rating           | number   | e.g. `4.5`               |
| category         | string   |                          |
| tags             | string[] |                          |
| publisher        | string   |                          |
| yearOfPublishing | number   |                          |

## Endpoints

### GET `/books/categories`
List distinct book categories.

**Response 200**
```json
{
  "status": "success",
  "message": "Book categories fetched successfully",
  "data": ["Classic", "Fiction", "Fantasy", "Mystery"]
}
```

---

### GET `/books`
List all books.

**Response 200**
```json
{
  "status": "success",
  "message": "Books fetched successfully",
  "data": [ /* Book[] */ ]
}
```

---

### GET `/books/:id`
Single book by numeric `bookId`.

**Response 200**
```json
{
  "status": "success",
  "message": "Book with id 2 fetched successfully",
  "data": { /* Book */ }
}
```

**Response 404** — no book matches `id`
```json
{ "status": "error", "message": "No Book found with id {id}" }
```

---

### GET `/books/category/:category`
Filter books by category name (case-insensitive).

**Response 200**
```json
{
  "status": "success",
  "message": "Books with category {category} fetched successfully",
  "data": [ /* Book[] */ ]
}
```

**Response 404** — no books match
```json
{ "status": "error", "message": "No book found with category {category}" }
```

**Example**
```
GET /api/v1/lab/books/category/Fantasy
```
