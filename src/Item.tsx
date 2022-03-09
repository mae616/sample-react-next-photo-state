import { nanoid } from "nanoid";

import { ImageListItem } from "@mui/material";

import type { Photo, OpenModalFunction } from "./type";

function Item({
  item,
  index,
  openModal,
}: {
  item: Photo;
  index: number;
  openModal: OpenModalFunction;
}): JSX.Element {
  const handleClick = (): void => {
    openModal(index);
  };

  return (
    <ImageListItem key={nanoid()}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        onClick={handleClick}
      />
    </ImageListItem>
  );
}

export default Item;
