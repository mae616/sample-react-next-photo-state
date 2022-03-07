import { ImageList } from "@mui/material";
import Item from "./Item";

function List({ photos }) {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {photos.map((item, index) => {
        return <Item item={item} index={index} />;
      })}
    </ImageList>
  );
}

export default List;
