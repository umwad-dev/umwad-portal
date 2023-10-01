import React from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import {
  Container,
  ShareText,
  SocialIcons,
  SocialIconsContainer,
} from "./SocialButtons.styles";
import FacebookIcon from "../../../../assets/story/facebook.webp";
import ShareIcon from "../../../../assets/story/share.webp";
import TwitterIcon from "../../../../assets/story/twitter.webp";
import { useNotification } from "../../../../hooks";

const SocialButtons = ({ title }) => {
  const { contextHolder, openNotification } = useNotification();

  const url = `https://startupwesternvisayas.com.ph${window.location.pathname}`;

  const onShareClick = () => {
    navigator.clipboard.writeText(url);
    openNotification({
      isSuccess: true,
      message: "Article/News link copied to clipboard.",
    });
  };

  return (
    <Container>
      {contextHolder}
      <ShareText>Share this post!</ShareText>
      <SocialIconsContainer>
        <TwitterShareButton title={title} url={url}>
          <SocialIcons alt="twitter" src={TwitterIcon} />
        </TwitterShareButton>
        <FacebookShareButton title={title} url={url}>
          <SocialIcons alt="facebook" src={FacebookIcon} />
        </FacebookShareButton>
        <SocialIcons alt="share" onClick={onShareClick} src={ShareIcon} />
      </SocialIconsContainer>
    </Container>
  );
};

export default SocialButtons;
