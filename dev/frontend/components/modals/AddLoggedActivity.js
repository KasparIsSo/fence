import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Router from "next/router";

import { LOGGED_ACTIVITIES_QUERY } from "../InfluencerLoggedActivities";
import { toRem } from "../utils/unitConversion";
import { BREAKPOINTS, GRID } from "../styles/Layout";
import TYPE from "../styles/Typography";
import ZINDEX from "../styles/Zindex";
import ANIMATION from "../styles/Animation";

import { CardContainer } from "../CardContainer";
import { TextFieldSimple } from "../TextField";
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
    padding: ${toRem(20)};
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: 1 /5;
    padding: ${toRem(20)};
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${toRem(40)};
  margin-bottom: ${toRem(20)};

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    width: 100%;
    grid-gap: ${toRem(20)};
  }
`;

const ActivityDescription = styled(TextFieldSimple)`
  margin: 0;
  display: inline-block;
  margin-bottom: ${toRem(20)};
  grid-column: span 3;

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
  }
`;

const ModalButtons = styled.div`
  float: right;

  > button {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    float: left;
    > button {
      display: block;
      margin-left: 0;
      margin-bottom: ${toRem(10)};
    }
  }
`;

const ActivitySelect = styled(Select)`
  grid-column: span 1;
  margin: 0;
  margin-bottom: ${toRem(20)};

  @media (max-width: ${BREAKPOINTS.mobile.large}) {
    grid-column: span 4;
    margin-bottom: 0;
  }
`;

const CREATE_LOGGED_ACTIVITY_MUTATION = gql`
  mutation CREATE_LOGGED_ACTIVITY_MUTATION(
    $activity: activityType!
    $description: String!
    $influencerId: String!
  ) {
    createLoggedActivity(
      eventType: $activity
      description: $description
      influencerId: $influencerId
    ) {
      createdAt
    }
  }
`;

class AddLoggedActivityModal extends Component {
  state = {
    show: this.props.show,
    description: "",
    activity: "instagram",
    activityOptions: [
      "Instagram",
      "Twitter",
      "Facebook",
      "Event",
      "Meeting",
      "Call",
      "Coffee",
      "Celebration",
      "Other"
    ],
    activityOptionsPlaceholders: {
      instagram: "New Instagram Post",
      twitter: "New Tweet",
      facebook: "New Facebook Post",
      event: "Attended an event",
      meeting: "Had a meeting",
      call: "Had a call",
      coffee: "Grabbed a coffee",
      celebration: "Had a celebration",
      other: "Something happened"
    },
    influencerId: this.props.influencerId
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  activityHandleChange = e => {
    const activityType = e.target.value;
    const description = e.target.parentNode.parentNode.querySelector("input");
    description.placeholder = this.state.activityOptionsPlaceholders[
      activityType
    ];

    this.setState({ activity: activityType });
  };

  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }

  render() {
    return (
      <BackgroundOverlay className={this.state.show ? "show" : null}>
        <ModalWrapper>
          <Modal>
            <Mutation
              mutation={CREATE_LOGGED_ACTIVITY_MUTATION}
              variables={{
                activity: this.state.activity.toUpperCase(),
                description: this.state.description
                  ? this.state.description
                  : this.state.activityOptionsPlaceholders[this.state.activity],
                influencerId: this.state.influencerId
              }}
              refetchQueries={[
                {
                  query: LOGGED_ACTIVITIES_QUERY,
                  variables: { id: this.state.influencerId }
                }
              ]}
            >
              {(createLoggedActivity, { loading, error }) => (
                <form
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createLoggedActivity();
                    this.setState({ description: "" });
                    this.props.hide();
                  }}
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <ModalHeader>
                      <ModalTitle>Log an Activity</ModalTitle>

                      <ModalClose type="button" onClick={this.props.hide}>
                        <CloseIcon />
                      </ModalClose>
                    </ModalHeader>

                    <ModalInput>
                      <ActivitySelect
                        labelFor="activity"
                        label="Activity"
                        options={this.state.activityOptions}
                        onChange={this.activityHandleChange}
                      />
                      <ActivityDescription
                        label="Description"
                        labelFor="description"
                        textInputName="description"
                        textInputPlaceholder={
                          this.state.activityOptionsPlaceholders[
                            this.state.activity
                          ]
                        }
                        inputType="secondary"
                        className="halfInput"
                        value={this.state.description}
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
                        onClick={this.props.hide}
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

export default AddLoggedActivityModal;
export { CREATE_LOGGED_ACTIVITY_MUTATION };
