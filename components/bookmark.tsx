import Image from "next/image";
import bookmark from "../public/bookmark.svg";
import isBookmarked from "../public/bookmark copy.svg";
import { useContext } from "react";
import { AppContext } from "@/utils/AppContext";

export default function Bookmark({ title, item }: any) {
  const { addToSavedItems, removeFromSavedItems, savedItems } =
    useContext(AppContext);

  const isFavourite = savedItems.includes(item);

  return (
    <div className="ml-auto">
      {isFavourite ? (
        <Image
          src={isBookmarked}
          width={30}
          height={30}
          alt="bookmark"
          onClick={() => {
            removeFromSavedItems(title, item); // Pass the item to remove
          }}
        />
      ) : (
        <Image
          src={bookmark}
          width={30}
          height={30}
          alt="bookmark"
          onClick={() => {
            addToSavedItems(item); // Pass the item to add
          }}
        />
      )}
    </div>
  );
}
