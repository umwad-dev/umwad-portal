import React from "react";
import Result from "antd/es/result";
import { ProductCard } from "../../../../components";
import {
  CardContainer,
  Container,
  Description,
  InnerContainer,
  NoDataContainer,
  Title,
  TitleSpan,
} from "./Products.styles";

const Products = ({ products }) => {
  return (
    <Container>
      <InnerContainer>
        <Title>
          <TitleSpan>Our New </TitleSpan>Products
        </Title>
        <Description>
          Discover our products offered to you in best quality.
        </Description>
        <CardContainer>
          {products.length > 0 ? (
            products.map((product, idx) => (
              <ProductCard
                key={idx}
                description={product.description}
                logo={product.bannerUrl}
                title={product.title}
              />
            ))
          ) : (
            <NoDataContainer>
              <Result
                status="404"
                title="No products found."
                subTitle="Sorry, we cannot load any product data as of the moment."
              />
            </NoDataContainer>
          )}
        </CardContainer>
      </InnerContainer>
    </Container>
  );
};

export default Products;
