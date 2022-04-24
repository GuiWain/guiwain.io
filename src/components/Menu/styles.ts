import styled, { css } from 'styled-components'

import UseLink from 'next/link'

import { Switch as UseSwitch } from 'antd'
import 'antd/lib/switch/style/index.css'

import { DarkMode, LightMode } from '@styled-icons/material/'

export const Logo = styled(UseLink)``
export const Switch = styled(UseSwitch)``

export const LightIcon = styled(LightMode)`
  ${({ theme }) => css`
    color: ${theme.colors.iconTheme};
    width: 1.6rem;
  `}
`

export const DarkIcon = styled(DarkMode)`
  ${({ theme }) => css`
    color: ${theme.colors.iconTheme};
    width: 1.6rem;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: auto;
    width: 90%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .ant-switch {
      width: 4rem;
      height: 2.2rem;
      background-color: ${theme.colors.text};

      :focus-within,
      :focus-visible {
        outline: none;
      }

      :focus {
        box-shadow: 0rem 0rem 0.2rem 0.1rem rgba(122, 0, 65, 0.2);

        .ant-switch-handle:before {
          box-shadow: inset 0rem 0rem 0.2rem 0.1rem rgba(122, 0, 65, 0.3);
        }
      }
    }

    .ant-switch-handle:before {
      background-color: ${theme.colors.primaryBg};
    }

    .ant-switch-checked .ant-switch-inner {
      margin: 0rem 2.5rem 0rem 0.2rem;
    }
  `}
`

export const Anchor = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family01};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.black};

    :hover {
      color: ${theme.colors.title};
    }

    cursor: pointer;
  `}
`
