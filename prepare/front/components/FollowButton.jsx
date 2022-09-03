import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const FollowButton = ({ post }) => {
  return <Button>팔로우</Button>;
};

export default FollowButton;

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};
