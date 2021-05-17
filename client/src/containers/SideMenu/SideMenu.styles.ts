import styled from "styled-components";
import { mediaQuery } from "../../theme/breakpoints.style";
import { sideMenu } from "../../theme/theme.style";

interface Props {
  open?: boolean;
  hide?: boolean;
}

const menuWidths = {
  default: {
    xs: sideMenu.width.default.xs,
    xxl: sideMenu.width.default.xxl
  },
  expanded: {
    xs: sideMenu.width.expanded.xs,
    xxl: sideMenu.width.expanded.xxl
  }
};

export const StyledSideMenu = styled.nav`
  display: flex;
  position: relative;
  height: 100vh;
  width: ${menuWidths.default.xs};
  flex-direction: column;
  background: var(--dark);
  font-weight: bold;
  font-size: 0.75rem;
  //line-height: 1.1em;
  z-index: var(--zindex-sidemenu);
  margin-left: 0;
  transition: all 300ms ease-out;

  ${mediaQuery("xxl")} {
    width: ${menuWidths.default.xxl};
    font-size: 0.925rem;
  }

  .logo {
    display: flex;
    justify-content: center;
    padding: 1.1rem 0 1.5rem;

    ${mediaQuery("xxl")} {
      padding: 1.5rem 0;
    }

    .logo-icon {
      display: flex;
    }
    .logo-full {
      display: none;
    }
  }

  ul {
    list-style: none;
    position: relative;
    li {
      padding-left: 0.7rem;
      padding-right: 0.7rem;
      margin: 0 0 0.5rem;

      ${mediaQuery("xxl")} {
        margin: 0 0 1rem;
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0.75rem 0;
        flex-direction: row;

        ${mediaQuery("xxl")} {
          padding: 1rem 0;
        }

        i {
          width: 2rem;
          display: flex;
          justify-content: center;
          //background: rgba(255,9,255,.3);
          margin-right: 0;

          svg {
            width: ${sideMenu.components.list.iconSize.xs};
            height: ${sideMenu.components.list.iconSize.xs};

            ${mediaQuery("xxl")} {
              width: ${sideMenu.components.list.iconSize.xxl};
              height: ${sideMenu.components.list.iconSize.xxl};
            }

            > path {
              fill: var(--lightest);
            }
          }
        }
        span {
          color: var(--lightest);
          white-space: nowrap;
          display: flex;
          width: 0;
          overflow: hidden;
          transition: all 100ms ease-out;
        }

        &:hover:not(.logo) {
          text-decoration: none;
          color: var(--text);
          i {
            & path {
              fill: var(--text);
            }
          }
        }
      }

      &:hover {
        background-color: var(--medium);
      }

      &.active {
        background-color: var(--page);

        a {
          i {
            svg {
              > path {
                fill: var(--primary);
              }
            }
          }
          span {
            color: var(--text);
          }
        }
      }
    }
  }

  &.hidden {
    //background: #f0f;
    margin-left: -${menuWidths.default.xs};

    ${mediaQuery("xxl")} {
      margin-left: -${menuWidths.default.xxl};
    }
  }
  &.expanded {
    width: ${menuWidths.expanded.xs};
    transition: all 300ms ease-out;

    ${mediaQuery("xxl")} {
      width: ${menuWidths.expanded.xxl};
    }

    &.hidden {
      margin-left: -${menuWidths.expanded.xs};

      ${mediaQuery("xxl")} {
        margin-left: -${menuWidths.expanded.xxl};
      }
    }

    .logo-icon {
      display: none;
    }
    .logo-full {
      display: flex;
    }

    ul {
      li {
        a {
          justify-content: flex-start;
          padding: 0.75rem 0.25rem;

          ${mediaQuery("xxl")} {
            padding: 1rem 0.25rem;
          }

          i {
            margin-right: 0.5rem;
            ${mediaQuery("xxl")} {
              margin-right: 1rem;
            }
          }
          span {
            width: 200px;
            transition: all 200ms ease-out;
          }
          svg {
            width: 3rem;
          }
        }
      }
    }
  }
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0.75rem 0;

  ${mediaQuery("xxl")} {
    padding: 1.5rem 0;
  }
`;

export const AppsNav = styled(NavList)`
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-bottom: 1px solid #253859;
    display: block;
    width: calc(100% - 1rem);
  }
`;

export const UserNav = styled(NavList)`
  flex-grow: 1;
`;

export const OptionsNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.85rem 0.75em;
  //height: 60px;

  ${mediaQuery("xxl")} {
    padding: 1.1rem 0.75em;
  }

  span {
    //background: rgba(20,3,222,.3);
    display: flex;
    width: 0;
    white-space: nowrap;
    overflow: hidden;
    transition: all 200ms ease-out;
    color: var(--lightest);
  }
  button {
    height: 100%;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    color: var(--lightest);
    width: 3rem;
    svg {
      margin: 0;
      path {
        fill: var(--lightest);
      }
    }
  }
  &:hover {
    color: var(--text);
    & path {
      fill: var(--text);
    }
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-bottom: 1px solid #253859;
    display: block;
    width: calc(100% - 1rem);
  }

  &.expanded {
    span {
      width: 200px;
      transition: all 200ms ease-out;
    }
  }
`;

export const OptionsMenu = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(calc(100% + 0.5rem), 0);
  padding: 0.65rem 0.5rem;
  min-width: 160px;
  z-index: var(--zindex-sidemenu);

  background: #0e1f3b;
  border-radius: 5px;

  ${mediaQuery("xxl")} {
    padding: 1rem 0.5rem;
    min-width: 200px;
  }

  ul {
    padding: 0;
    margin: 0;
    li {
      padding: 0;
      margin: 0;

      a {
        display: flex;
        justify-content: flex-start;
        color: var(--text);
        font-weight: normal;
        text-decoration: none;
        padding: 0.5rem !important;
        height: auto;

        ${mediaQuery("xxl")} {
          padding: 0.75rem !important;
        }
      }

      &:hover {
        background: none;
      }
    }
  }
`;
