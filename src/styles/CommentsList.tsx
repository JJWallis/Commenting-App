import styled, { css } from 'styled-components'

interface Props {
   replies?: boolean
}

export default styled.ul<Props>`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   ${({ replies }) =>
      replies &&
      css`
         position: relative;
         width: 90%;
      `}
`
