import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Spinner = styled.div`
  margin: 0.5em auto 0;
  width: 70px;
  text-align: center;
  visibility: hidden;

  &.active {
    visibility: visible;
  }

  & > div {
    width: 8px;
    height: 8px;
    background-color: #333;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  & .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  & .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`

const Loading = ({ isLoading }) => (
  <Spinner className={isLoading ? "active" : ""}>
    <div className="bounce1"></div>
    <div className="bounce2"></div>
    <div className="bounce3"></div>
  </Spinner>
)

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

export default Loading
