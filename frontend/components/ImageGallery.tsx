import React, { useState } from "react";
import Record from "@airtable/blocks/dist/types/src/models/record";
import Field from "@airtable/blocks/dist/types/src/models/field";
import { Box } from "@airtable/blocks/ui";

interface ImageGalleryProps {
  imagesUrl: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ imagesUrl }) => {
  const [currentImage, setCurrentImage] = useState("");

  return (
    <>
      <Box>
        <img
          src={currentImage}
          width={"100%"}
          height={"70%"}
          style={{ marginRight: "10px", maxHeight: "60%" }}
        />
      </Box>
      <Box overflowX={"scroll"} display={"flex"} flexDirection={"row"}>
        {imagesUrl.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            width={"30%"}
            height={"30%"}
            style={{ marginRight: "10px" }}
            onClick={() => setCurrentImage(imgUrl)}
          />
        ))}
      </Box>
    </>
  );
};
