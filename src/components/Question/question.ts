import styled from 'styled-components'

export const QuestionCss = styled.div`
  .question {
    background: #fefefe;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    padding: 24px;

    p {
      color: #29292e;
    }

    & + .question {
      margin-top: 20px;
    }

    &.highlighted {
      background: #f4f0ff;
      border: 1px solid #835afd;

      footer .user-info span {
        color: #29292e;
      }
    }

    &.answered {
      background: #dbdcdd;
    }

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;

      .user-info {
        display: flex;
        align-items: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        span {
          margin-left: 8px;
          color: #737380;
          font-size: 14px;
        }
      }

      > div {
        display: flex;
        gap: 16px;
      }

      button {
        border: 0;
        background: transparent;
        cursor: pointer;
        transition: filter 0.2s;

        &.like-button {
          display: flex;
          align-items: flex-end;
          color: #737380;
          gap: 8px;

          &.liked {
            color: #835afd;

            svg path {
              stroke: #835afd;
            }
          }
        }
        &:hover {
          filter: brightness(0.6);
        }
      }
    }
  }

  @media (max-width: 850px) {
    .question {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
  }
`
