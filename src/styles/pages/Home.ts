import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: var(--color-info-color-sign-info-dark);
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;


export const GradientBox = styled.div`
  width: 100px;
  height: 100px;
  background: var(--gradient-neutral-color-neutral-medium);
  margin: 50px auto;
  border-color: var(--color-info-color-sign-info-light);
  border-width: thin;
`;