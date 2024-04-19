import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  width: 480px;
  height: fit-content;
  background-color: var(--white);
  border-radius: 8px;
  padding: 8px;
  gap: 16px;
  box-shadow: 0px 2px 15px -3px rgba(0, 0, 0, 0.1);
`;

const CartImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  flex-grow: 1;
`;

const CartTitle = styled.h3`
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const CartPrice = styled.h5`
  font-size: 12px;
  color: #71717a;
  font-weight: 500;
`;
const CartButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary);
  height: fit-content;
  padding: 8px;
  color: var(--white);
`;

export {
  CartContainer,
  CartImage,
  CartTitle,
  CartBody,
  CartPrice,
  CartButtonRemove,
};
