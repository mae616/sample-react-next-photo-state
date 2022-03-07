import { nanoid } from "nanoid";

import { ImageListItem } from "@mui/material";

function Item({ item, index, openModal }) {
  return (
    <ImageListItem key={nanoid()}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        onClick={openModal.bind(this, index)}
      />
    </ImageListItem>
  );
}

export default Item;
