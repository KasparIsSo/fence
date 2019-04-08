import Link from "next/link";
import Influencer from "../components/Influencer";
import AdminHeader from "../components/AdminHeader";

const InfluencerProfile = props => (
  <>
    <AdminHeader />
    <Influencer id={props.query.id} />
  </>
);

export default InfluencerProfile;
