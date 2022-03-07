import { ImageListItem } from "@mui/material";

function Item({ item, index }) {
  return (
    <ImageListItem key={index}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  );
}

export default Item;
