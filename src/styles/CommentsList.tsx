import styled, { css } from 'styled-components'

interface Props {
   replies?: boolean
}

export default styled.ul<Props>`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   gap: 1rem;
   ${({ replies }) =>
      replies &&
      css`
         position: relative;
         width: 90%;
         &::before {
            content: '';
            position: absolute;
            left: -30px;
            width: 1.5px;
            height: 100%;
            background-color: ${({ theme }) => theme.lightGreyBlue};
            gap: 1rem;
            border-radius: 5px;
         }
      `}
`
