import { nanoid } from "nanoid";
import { ImageList } from "@mui/material";
import Item from "./Item";

function List({ photos, openModal }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {photos.map((item, index) => {
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
