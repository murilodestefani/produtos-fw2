import styled from 'styled-components';

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 320px;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.15s;
  z-index: 5;
  position: relative;

  &:hover {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.25);
    transition: all 0.15s;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 260px;
  overflow: hidden;
`;

const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  background-color: var(--white);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  width: 70%;
  font-size: 14px;
  font-weight: 800;
  text-transform: capitalize;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const CardPrice = styled.p`
  font-size: 14px;
`;

const CardDescription = styled.p`
  height: 72px;
  font-size: 12px;
  color: #737373;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const CardFooter = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-content: flex-end;
`;

const CardButton = styled.button`
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    background-color: var(--secondary);
    transition: all 0.25s;
  }
`;

const CardButtonFavorito = styled.button`
  background-color: rgba(255, 255, 255, 0.125);
  color: var(--white);
  font-weight: 500;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 16px;
  z-index: 10;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const CardButtonVerProduto = styled.button`
  background-color: var(--primary);
  color: var(--white);
  font-weight: 500;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    background-color: var(--secondary);
    transition: all 0.25s;
  }
`;
export {
  CardContainer,
  CardImage,
  CardPhoto,
  CardBody,
  CardHeader,
  CardTitle,
  CardPrice,
  CardDescription,
  CardFooter,
  CardButton,
  CardButtonFavorito,
  CardButtonVerProduto,
};
