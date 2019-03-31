import Link from "next/link";
import Influencer from "../components/Influencer";

const InfluencerProfile = props => (
  <div>
    <Influencer id={props.query.id} />
  </div>
);

export default InfluencerProfile;
