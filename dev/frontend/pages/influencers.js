import React, { Component } from "react";
import styled from "styled-components";
import Influencers from "../components/Influencers";
import AdminHeader from "../components/AdminHeader";

// const InfluencersPage = props => <Influencers />;

const InfluencersPage = props => (
  <>
    <AdminHeader />
    <Influencers />
  </>
);

export default InfluencersPage;
