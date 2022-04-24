import styled, { css } from 'styled-components'

import UseLink from 'next/link'

import { Switch as UseSwitch } from 'antd'
import 'antd/dist/antd.css'

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
        box-shadow: 0px 0px 2px 1px rgba(122, 0, 65, 0.2);

        .ant-switch-handle:before {
          box-shadow: inset 0px 0px 2px 1px rgba(122, 0, 65, 0.3);
        }
      }
    }

    .ant-switch-handle:before {
      background-color: ${theme.colors.primaryBg};
    }

    .ant-switch-checked .ant-switch-inner {
      margin: -2px 25px 0 2px;
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
  `}
`
