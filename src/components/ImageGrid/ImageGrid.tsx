import { useState, useEffect } from "react";
import { ImageGridContainer, ImageSmall, ImageLarge } from "./ImageGrid.styles";
import exp from "constants";

export type ImageGridObj = {
  id: string;
  url: string;
};

export type ImageGridProps = {
  imageArr: ImageGridObj[];
};

export const ImageGrid: React.FC<ImageGridProps> = ({ imageArr }) => {
  const [images, setImages] = useState<ImageGridObj[]>([]);
  const [mainImage, setMainImage] = useState<ImageGridObj>({ id: "", url: "" });

  const handleImageClick = (image: ImageGridObj) => {
    setMainImage(image);
  };

  useEffect(() => {
    if (imageArr && imageArr.length > 0) {
      setMainImage(imageArr[0]);
      setImages(imageArr);
    }
  }, [imageArr]);

  return (
    <>
      {mainImage.url ? (
        <ImageGridContainer>
          <ImageLarge
            src={mainImage.url}
            width={650}
            height={650}
            alt="Main Image"
          />
          <div className="image-grid">
            {images.map((image) => (
              <ImageSmall
                onClick={() => handleImageClick(image)}
                width={75}
                height={75}
                key={image.id}
                src={image.url}
                alt={`Image ${image.id}`}
              />
            ))}
          </div>
        </ImageGridContainer>
      ) : null}
    </>
  );
};
0;
