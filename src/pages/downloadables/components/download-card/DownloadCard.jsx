import React from "react";
import {
  Button,
  ButtonWrapper,
  CardContainer,
  DetailsWrapper,
  ImageWrapper,
  Line,
  Logo,
  Title,
} from "./DownloadCard.styles";
import FileLogo from "../../../../assets/downloadables/file.png";

const DownloadCard = ({ data }) => {
  const onPreviewClick = () => window.open(data.preview, "_blank");

  return (
    <CardContainer>
      <ImageWrapper>
        <Logo alt="logo" src={FileLogo} />
      </ImageWrapper>
      <DetailsWrapper>
        <Title>{data.name}</Title>
        <Line />
        <ButtonWrapper>
          <Button onClick={onPreviewClick}>Preview</Button>
          <a
            href={require(`../../../../assets/downloadables/${data.download}.pdf`)}
            download={data.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Download</Button>
          </a>
        </ButtonWrapper>
      </DetailsWrapper>
    </CardContainer>
  );
};

export default DownloadCard;
