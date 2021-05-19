import React from "react";

const UserId = (props) => {
  return (
    <div>
      <h3>User {props.id}</h3>
    </div>
  );
};

export default UserId;

export async function getServerSideProps(context) {
  return {
    props: { id: context.params.userId },
  };
}
