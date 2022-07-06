import React from "react";
import styled from 'styled-components'

const Img1 = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

function Matches(props) {
  
  return (
    <div>
      <h2>matches</h2>
      {props.matchedProfiles.map((profile) => {
        return (
          <p key={profile.name}>
            <Img1 src={profile.photo} alt="" />
            {profile.name}{" "}
          </p>
        );
      })}
    </div>
  )
}

export default Matches