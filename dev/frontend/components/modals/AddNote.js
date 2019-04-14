import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

import { NOTES_QUERY } from "../InfluencerNotes";
import { toRem } from "../utils/unitConversion";
import { BREAKPOINTS, GRID } from "../styles/Layout";
import TYPE from "../styles/Typography";
import ZINDEX from "../styles/Zindex";
import ANIMATION from "../styles/Animation";

import { CardContainer } from "../CardContainer";
import { TextFieldSimple } from "../TextField";
import { TextAreaSimple } from "../TextArea";
import Select from "../Select";
import Button from "../Button";
import Error from "../ErrorMessage";

import CloseIcon from "react-svg-loader!../../static/icons/input/cancel/default.svg";

const BackgroundOverlay = styled.div`
  background-color: ${props => props.theme.background.overlay};
  ${GRID.wrapper}
  max-width: none;
  width: calc(100vw - ${toRem(200)});
  transform: translateX(${toRem(200)});
  height: 0;
  min-height: 100vh;
  padding: ${toRem(60)} 0;
  position: fixed;
  overflow: hidden;
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
    overflow-y: scroll;
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
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.25rem;

  :focus {
    outline: none;
  }
`;

const ModalInput = styled.div`
  padding-top: ${toRem(40)};
  margin-bottom: ${toRem(20)};

  > div {
    margin: 0;
    margin-bottom: ${toRem(20)};
  }
`;

const NoteContent = styled(TextAreaSimple)`
  margin: 0;
  display: block;
  margin-bottom: ${toRem(20)};

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    width: 100%;
  }
`;

const ModalButtons = styled.div`
  float: right;

  > button {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const CREATE_NOTE_MUTATION = gql`
  mutation CREATE_NOTE_MUTATION(
    $content: String!
    $isShown: Boolean!
    $influencerId: String!
  ) {
    createNote(
      content: $content
      isShown: $isShown
      influencerId: $influencerId
    ) {
      createdAt
    }
  }
`;

class AddNoteModal extends Component {
  state = {
    show: this.props.show,
    content: "",
    isShown: true,
    influencerId: this.props.influencerId
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }

  hideModal = e => {
    if (e) {
      e.preventDefault();
    }
    this.setState({ show: false });
    document.querySelector("body").classList.toggle("modalOpen");
  };

  render() {
    return (
      <BackgroundOverlay className={this.state.show ? "show" : null}>
        <ModalWrapper>
          <Modal>
            <Mutation
              mutation={CREATE_NOTE_MUTATION}
              variables={this.state}
              refetchQueries={[
                {
                  query: NOTES_QUERY,
                  variables: { id: this.state.influencerId }
                }
              ]}
            >
              {(createNote, { loading, error }) => (
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createNote();
                    this.hideModal();
                  }}
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <ModalHeader>
                      <ModalTitle>Add a Note</ModalTitle>

                      <ModalClose type="button" onClick={this.hideModal}>
                        <CloseIcon />
                      </ModalClose>
                    </ModalHeader>

                    <ModalInput>
                      <NoteContent
                        label="Note"
                        labelFor="note"
                        textInputName="content"
                        textInputPlaceholder="Add a quick note"
                        inputType="secondary"
                        required
                        value={this.state.content}
                        onChange={this.handleChange}
                      />
                    </ModalInput>

                    <ModalButtons>
                      <Button buttonType="primary" type="submit">
                        Submit
                      </Button>
                      <Button
                        buttonType="secondary"
                        type="button"
                        onClick={this.hideModal}
                      >
                        Cancel
                      </Button>
                    </ModalButtons>
                  </fieldset>
                </form>
              )}
            </Mutation>
          </Modal>
        </ModalWrapper>
      </BackgroundOverlay>
    );
  }
}

export default AddNoteModal;
export { CREATE_NOTE_MUTATION };
