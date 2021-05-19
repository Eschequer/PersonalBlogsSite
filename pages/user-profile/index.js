import React from "react";

const UserProfile = (props) => {
  return <div>{props.userName}</div>;
};

export default UserProfile;

export async function getServerSideProps(context) {
  console.log(context);

  return {
    props: { userName: "Maxks" },
  };
}
