import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg``

export const AlertIcon: React.FC = (props) => {
  const { ...restProps } = props

  return (
    <Wrapper
      {...restProps}
      height="50"
      viewBox="0 0 24 25"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0H24V24H0z" />
        <path
          d="M11.999 8.002c.552 0 1 .447 1 1v4c0 .552-.448 1-1 1-.553 0-1-.448-1-1v-4c0-.553.447-1 1-1M11.999 15.752c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25"
          fill="#ffc05f"
        />
        <path
          d="M12 2c-.502 0-1.004.25-1.283.752L1.187 19.83C.644 20.804 1.352 22 2.47 22H21.53c1.119 0 1.826-1.196 1.283-2.17l-9.53-17.078C13.004 2.25 12.503 2 12 2m0 2.554l8.624 15.454H3.377L12 4.554"
          fill="#ffc05f"
        />
      </g>
    </Wrapper>
  )
}
