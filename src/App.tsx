import { useState, useReducer } from "react";

import { Container, Modal, Box, Typography } from "@mui/material";
import styled from "styled-components";

import type { Photo } from "./type";
import List from "./List";
import { usePhotosRedux } from "./hooks/usePhotosRedux";

// import logo from "./logo.svg";
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

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const PhotoButton = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 1.5em;
  :hover {
    background-color: #c0c0c0;
    cursor: pointer;
  }
`;

function App(): JSX.Element {
  const photos: Photo[] = [
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
  ];
  const [showModal, setShowModal] = useState<boolean>(false);

  const { photosIndex, dispatchSubstitution, dispatchPrev, dispatchNext } =
    usePhotosRedux(photos.length);

  const openModal = (index: number): void => {
    dispatchSubstitution(index);
    setShowModal(true);
  };

  const handleClose = (): void => {
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
          <BoxWrapper>
            <PhotoButton onClick={dispatchPrev}>&lt;</PhotoButton>
            <div>
              <p>{photos[photosIndex]?.title}</p>
              <img
                src={photos[photosIndex]?.img}
                alt={photos[photosIndex]?.title}
              />
              <p>{photos[photosIndex]?.description}</p>
            </div>
            <PhotoButton onClick={dispatchNext}>&gt;</PhotoButton>
          </BoxWrapper>
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
