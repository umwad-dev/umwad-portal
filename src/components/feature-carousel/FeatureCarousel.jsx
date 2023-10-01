import React from "react";
import { Card } from "./components";
import { StyledCarousel } from "./FeatureCarousel.styles";

const FeatureCarousel = ({ featuredPosts }) => {
  return (
    <StyledCarousel autoplay effect="fade">
      {featuredPosts?.length > 0
        ? featuredPosts.map(
            ({ author, bannerUrl, createdAt, uid, position, slug, title }) => (
              <Card
                key={uid}
                author={author}
                bannerUrl={bannerUrl}
                createdAt={createdAt}
                position={position}
                slug={slug}
                title={title}
                uid={uid}
              />
            )
          )
        : null}
    </StyledCarousel>
  );
};

export default FeatureCarousel;
