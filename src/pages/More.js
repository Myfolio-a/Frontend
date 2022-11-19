import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import * as colors from "../styles/colors";

export default function More() {
  const { itemId } = useParams();
  return (
    <MainFrame>
      <SubFrame>
        <Header>{itemId}</Header>
        <ContentFrame>
          <ImageFrame />
          <BodyFrame>
            <ContentArea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sit amet malesuada massa. In hac habitasse platea
              dictumst. Proin non sollicitudin nisi, nec sollicitudin odio.
              Pellentesque quam felis, tincidunt vel accumsan eget, vulputate in
              sapien. Fusce egestas a dui a ultricies. Maecenas at pretium
              sapien, eu sollicitudin tellus. Aenean mattis a elit eget
              molestie. Maecenas varius tincidunt sagittis. Nullam tempor libero
              nisi. Ut eu libero in lacus egestas maximus. Nunc at augue in
              ipsum ultrices pharetra ac sit amet tortor. Vestibulum consectetur
              posuere est. Fusce erat metus, sagittis a scelerisque nec,
              facilisis egestas turpis. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Maecenas vitae
              mollis orci. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Proin id neque enim. Pellentesque ut orci at leo dapibus
              lacinia sed eget sapien. Vestibulum quis ex sed velit aliquam
              hendrerit. Curabitur rhoncus libero id enim dapibus fringilla.
              Maecenas nulla lectus, posuere sit amet enim nec, commodo iaculis
              nunc. In a vestibulum tellus, eu imperdiet risus. Integer nec
              risus sit amet enim sollicitudin facilisis. In laoreet dapibus mi,
              vitae volutpat purus cursus ut. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vestibulum sit amet malesuada massa.
              In hac habitasse platea dictumst. Proin non sollicitudin nisi, nec
              sollicitudin odio. Pellentesque quam felis, tincidunt vel accumsan
              eget, vulputate in sapien. Fusce egestas a dui a ultricies.
              Maecenas at pretium sapien, eu sollicitudin tellus. Aenean mattis
              a elit eget molestie. Maecenas varius tincidunt sagittis. Nullam
              tempor libero nisi. Ut eu libero in lacus egestas maximus. Nunc at
              augue in ipsum ultrices pharetra ac sit amet tortor.
            </ContentArea>
            <TagFrame>
              <TagTitle>태그</TagTitle>
              <TagDescription>태그가 없습니다.</TagDescription>
            </TagFrame>
          </BodyFrame>
        </ContentFrame>
      </SubFrame>
    </MainFrame>
  );
}

const TagDescription = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.grey300};
`;

const TagTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.grey900};
`;

const BodyFrame = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;

  padding-top: 24px;
`;

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  padding-left: 32px;

  color: ${colors.grey900};

  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
`;

const TagFrame = styled.div`
  width: 200px;
  padding-right: 32px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImageFrame = styled.div`
  width: 960px;
  height: 480px;
  background-color: ${colors.grey100};
  border-radius: 2px;
  margin-top: 156px;
`;

const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 64px;
`;

const Header = styled.div`
  width: 100%;
  height: 132px;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.grey50};

  position: fixed;
  left: 0;
  top: 0;
`;

const SubFrame = styled.div`
  width: 1024px;
  height: 100%;
`;

const MainFrame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
