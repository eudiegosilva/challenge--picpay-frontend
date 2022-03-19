import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${() => css``}
`;

export const UserInfoWrapper = styled.div`
  ${() => css``}
`;

export const UserImageWrapper = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      to top left,
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
    width: 8.5rem;
    height: 8.5rem;
    border-radius: ${theme.border.radius.rounded};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const UserImage = styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.rounded};
    width: 8rem;
    background: linear-gradient(
      to bottom right,
      ${theme.colors.primary},
      ${theme.colors.black}
    );
    border: 0.25rem solid ${theme.colors.white};
  `}
`;

export const UserInfo = styled.div`
  ${() => css``}
`;

export const UserUsernameWrapper = styled.div`
  ${() => css``}
`;