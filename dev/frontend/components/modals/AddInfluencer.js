import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { toRem } from "../utils/unitConversion";
import { BREAKPOINTS, GRID } from "../styles/Layout";
import TYPE from "../styles/Typography";
import ZINDEX from "../styles/Zindex";
import ANIMATION from "../styles/Animation";

import { CardContainer } from "../CardContainer";
import { TextFieldSimple } from "../TextField";
import { TextAreaSimple } from "../TextArea";
import Button from "../Button";

import CloseIcon from "react-svg-loader!../../static/icons/interface/cancel/default.svg";

// import THEME from "../styles/Theme";

const BackgroundOverlay = styled.div`
  background-color: ${props => props.theme.background.overlay};
  ${GRID.wrapper}
  max-width: initial;
  /* width: 100vw; */
  /* translate: none; */
  transform: translateX(12.5rem);
  height: 100vh;
  min-height: min-content;
  position: fixed;
  left: 0;
  top: 0;
  z-index: ${ZINDEX.overlay};
  ${ANIMATION.default}
  transition-property: opacity;
  pointer-events: none;
  opacity: 0;

  &.show {
    pointer-events: auto;
    opacity: 1;
  }

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    transform: translateX(6.5em);
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    transform: translateX(4rem);
  }
`;

const ModalWrapper = styled.div`
  position: relative;
  ${GRID.container}
  top: 50%;
  transform: translateY(-50%);
`;

const Modal = styled(CardContainer)`
  position: relative;
  grid-column: 2 /12;
  margin-bottom: 0;

  @media (max-width: ${BREAKPOINTS.tablet.large}) {
    grid-column: 1 /9;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: 1 /5;
  }
`;

const ModalHeader = styled.div`
  padding-bottom: ${toRem(20)};
  border-bottom: 1px solid ${props => props.theme.color.subdued};
`;

const ModalTitle = styled.h4`
  ${TYPE.heading.feature.ink}
  display: inline-block;
  margin: 0;
  max-width: calc(100% - 2.25rem);
`;

const ModalClose = styled.button`
  border: none;
  background: none;
  padding: 0;
  float: right;
  width: 2.25rem;
  height: 2.25rem;

  :focus {
    outline: none;
  }
`;

const ModalInput = styled.div`
  padding-top: ${toRem(40)};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: ${toRem(20)};

  .halfInput {
    width: calc(50% - ${toRem(20)});
    margin: 0;
    display: inline-block;
    margin-bottom: ${toRem(20)};

    @media (max-width: ${BREAKPOINTS.mobile.large}) {
      width: 100%;
    }
  }

  > div {
    margin: 0;
    margin-bottom: ${toRem(20)};
  }
`;

const ModalButtons = styled.div`
  float: right;

  > button {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

class AddInfluencerModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <BackgroundOverlay className={this.state.show ? "show" : null}>
        <ModalWrapper>
          <Modal>
            <ModalHeader>
              <ModalTitle>Add an Influencer</ModalTitle>

              <ModalClose onClick={this.hideModal}>
                <CloseIcon />
              </ModalClose>
            </ModalHeader>

            <ModalInput>
              <TextFieldSimple
                label="First Name"
                textInputName="firstName"
                textInputPlaceholder="Enter their first name"
                inputType="secondary"
                className="halfInput"
              />
              <TextFieldSimple
                label="Last Name (Optional)"
                textInputName="lastName"
                textInputPlaceholder="Enter their last name"
                inputType="secondary"
                className="halfInput"
              />
              <TextAreaSimple
                label="Description (Optional)"
                textInputName="description"
                textInputPlaceholder="Something to help you remember them"
                inputType="secondary"
              />
            </ModalInput>
            <ModalButtons>
              <Button buttonType="primary">Submit</Button>
              <Button buttonType="secondary">Cancel</Button>
            </ModalButtons>
          </Modal>
        </ModalWrapper>
      </BackgroundOverlay>
    );
  }
}

// class Modal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.el = document.createElement("div");
//   }

//   componentDidMount() {
//     modalRoot.appendChild(this.el);
//   }

//   componentWillUnmount() {
//     modalRoot.removeChild(this.el);
//   }

//   render() {
//     return ReactDOM.createPortal(this.props.children, this.el);
//   }
// }

// export default ModalBackground;

export default AddInfluencerModal;
