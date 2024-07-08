import { useState, createContext, useEffect } from "react";

export const BookmarksContext = createContext(null);

function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>(() => {
    try {
      const storedIds = localStorage.getItem("bookmarkedIds");
      return storedIds ? JSON.parse(storedIds) : [];
    } catch (error) {
      console.error("Error parsing bookmarkedIds from localStorage:", error);
      return [];
    }
  });

  const handleToggleBookmark = (id: number) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds((prev) => prev.filter((item) => item !== id));
    } else {
      setBookmarkedIds((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    localStorage.setItem("bookmarkedIds", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToggleBookmark,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
export default BookmarksContextProvider;
