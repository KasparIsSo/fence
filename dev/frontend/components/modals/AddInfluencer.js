import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

import { toRem } from "../utils/unitConversion";
import { BREAKPOINTS, GRID } from "../styles/Layout";
import TYPE from "../styles/Typography";
import ZINDEX from "../styles/Zindex";
import ANIMATION from "../styles/Animation";

import { CardContainer } from "../CardContainer";
import { TextFieldSimple } from "../TextField";
import { TextAreaSimple } from "../TextArea";
import UploadField from "../UploadField";
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

const CREATE_INFLUENCER_MUTATION = gql`
  mutation CREATE_INFLUENCER_MUTATION(
    $firstName: String!
    $lastName: String
    $description: String
    $phone: String
    $thumbnail: String
    $image: String
    $activeCampaigns: [String]
    $pastCampaigns: [String]
  ) {
    createInfluencer(
      firstName: $firstName
      lastName: $lastName
      description: $description
      phone: $phone
      thumbnail: $thumbnail
      image: $image
      activeCampaigns: $activeCampaigns
      pastCampaigns: $pastCampaigns
    ) {
      id
    }
  }
`;

class AddInfluencerModal extends Component {
  state = {
    show: this.props.show,
    firstName: "",
    lastName: "",
    description: "",
    thumbnail: "",
    image: ""
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "fence-social");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/kaspar/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    console.log(file);
    this.setState({
      thumbnail: file.secure_url,
      image: file.eager[0].secure_url
    });
  };

  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }

  hideModal = e => {
    e.preventDefault();
    this.setState({ show: false });
    document.querySelector("body").classList.toggle("modalOpen");
  };

  render() {
    return (
      <BackgroundOverlay className={this.state.show ? "show" : null}>
        <ModalWrapper>
          <Modal>
            <Mutation
              mutation={CREATE_INFLUENCER_MUTATION}
              variables={this.state}
            >
              {(createInfluencer, { loading, error }) => (
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createInfluencer();
                    Router.push({
                      pathname: "/influencer",
                      query: { id: res.data.createInfluencer.id }
                    });
                    this.hideModal;
                  }}
                >
                  <fieldset disabled={loading} aria-busy={loading}>
                    <Error error={error} />
                    <ModalHeader>
                      <ModalTitle>Add an Influencer</ModalTitle>

                      <ModalClose type="button" onClick={this.hideModal}>
                        <CloseIcon />
                      </ModalClose>
                    </ModalHeader>

                    <ModalInput>
                      <TextFieldSimple
                        label="First Name"
                        labelFor="firstName"
                        textInputName="firstName"
                        textInputPlaceholder="Enter their first name"
                        inputType="secondary"
                        className="halfInput"
                        required
                        value={this.state.firstName}
                        onChange={this.handleChange}
                      />
                      <TextFieldSimple
                        label="Last Name (Optional)"
                        labelFor="lastName"
                        textInputName="lastName"
                        textInputPlaceholder="Enter their last name"
                        inputType="secondary"
                        className="halfInput"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                      />
                      <TextAreaSimple
                        label="Description (Optional)"
                        labelFor="description"
                        textInputName="description"
                        textInputPlaceholder="Something to help you remember them"
                        inputType="secondary"
                        value={this.state.description}
                        onChange={this.handleChange}
                      />
                      <UploadField
                        onChange={this.uploadFile}
                        image={this.state.image}
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

export default AddInfluencerModal;
export { CREATE_INFLUENCER_MUTATION };
