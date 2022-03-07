import { useState } from "react";

import { Container, Modal, Box, Typography } from "@mui/material";
import List from "./List";

import logo from "./logo.svg";
import "./App.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  const [photos, setPhotos] = useState([
    {
      img: "./img/norway-g4be0bf754_640.jpg",
      title: "norway",
      description: (
        <>
          <a
            href="https://pixabay.com/ja/users/jplenio-7645255/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3605547"
            target="new"
          >
            jplenio
          </a>
          による
          <a
            href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3605547"
            target="new"
          >
            Pixabay
          </a>
          からの画像
        </>
      ),
    },
    {
      img: "./img/road-g3b43f646d_640.jpg",
      title: "road",
      description: (
        <>
          <a
            href="https://pixabay.com/ja/users/valiphotos-1720744/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1072821"
            target="new"
          >
            Valiphotos
          </a>
          による
          <a
            href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1072821"
            target="new"
          >
            Pixabay
          </a>
          からの画像
        </>
      ),
    },
    {
      img: "./img/ocean-gd8c3fa61e_640.jpg",
      title: "ocean",
      description: (
        <>
          <a
            href="https://pixabay.com/ja/users/iniesta44-4560761/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4970080"
            target="new"
          >
            Patrik Houštecký
          </a>
          による
          <a
            href="https://pixabay.com/ja/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4970080"
            target="new"
          >
            Pixabay
          </a>
          からの画像
        </>
      ),
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [indexModal, setIndexModal] = useState(null);

  const openModal = (index) => {
    setIndexModal(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <Container>
      <h1>state photo</h1>
      <List photos={photos} openModal={openModal} />
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p>{photos[indexModal]?.title}</p>
          <img src={photos[indexModal]?.img} alt={photos[indexModal]?.title} />
          <p>{photos[indexModal]?.description}</p>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
