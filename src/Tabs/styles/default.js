import { css } from 'styled-components';

export const style = ({ theme, main }) => css`
  display: flex;
  flex: 0 0 30px;
  padding-left: 1px;
  background-color: ${theme.base01};
  ${!main && `
  border-top: 1px solid ${theme.base01};
  border-bottom: 1px solid ${theme.base02};
  `}

  > div:first-child, >div:nth-child(2) {
    display: flex;
    align-items: flex-end;
    flex-wrap: nowrap;
    left: 0;
    position: fixed;

  svg {
      font-size: 16px;
      padding: 7px 0 7px 0;
      right: 0;
      cursor: pointer;
    }

    button {
      background-color: ${theme.base01};
      color: ${theme.base05};
      letter-spacing: 0.3px;
      min-height: 30px;
      padding: 2px 10px;
      margin-right: 1px;
      border: ${main ? '2' : '1'}px solid transparent;
      cursor: pointer;
      text-align: center;
      overflow: hidden;
      outline: 0;
      transition: all 0.5s;

      &:hover,
      &:focus {
        background-color: ${main ? theme.base02 : theme.base00};
        text-shadow: ${theme.base01} 0 1px;
      }
      &.collapsed{
        display: none;
      }
    }

    > [data-selected] {
      ${main ?
      `border-bottom: 2px solid ${theme.base0B};` :
      `
      background-color: ${theme.base00};
      border: 1px solid ${theme.base02};
      border-bottom: 1px solid ${theme.base00};
      box-shadow: 0 1px ${theme.base00};
      `
      }
      color: ${theme.base07};
    }
  }
  >div:nth-child(2) {
    flex-direction: column;
  }
`;
