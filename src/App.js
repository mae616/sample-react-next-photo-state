import { useState } from "react";

import { Container, ImageList, ImageListItem } from "@mui/material";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([
    {
      img: "./img/norway-g4be0bf754_640.jpg",
      alt: "norway",
      description: `<a href="https://pixabay.com/ja/users/jplenio-7645255/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3605547">jplenio</a>による<a href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3605547">Pixabay</a>からの画像`,
    },
    {
      img: "./img/road-g3b43f646d_640.jpg",
      alt: "road",
      description: `<a href="<a href="https://pixabay.com/ja/users/valiphotos-1720744/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1072821">Valiphotos</a>による<a href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1072821">Pixabay</a>からの画像`,
    },
    {
      img: "./img/ocean-gd8c3fa61e_640.jpg",
      alt: "ocean",
      description: `<a href="https://pixabay.com/ja/users/iniesta44-4560761/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4970080">Patrik Houštecký</a>による<a href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4970080">Pixabay</a>からの画像`,
    },
  ]);

  return (
    <Container>
      <h1>state photo</h1>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {photos.map((item, index) => {
          return (
            <ImageListItem key={index}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.alt}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}

export default App;
