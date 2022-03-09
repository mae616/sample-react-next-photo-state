import { nanoid } from "nanoid";
import { ImageList } from "@mui/material";
import type { Photo, OpenModalFunction } from "./type";
import Item from "./Item";

function List({
  photos,
  openModal,
}: {
  photos: Photo[];
  openModal: OpenModalFunction;
}): JSX.Element {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {photos.map((item: Photo, index: number) => {
        return (
          <Item
            item={item}
            index={index}
            openModal={openModal}
            key={nanoid()}
          />
        );
      })}
    </ImageList>
  );
}

export default List;
