import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";
import { createPost } from "../actions/postActions";
class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
    // call action
  }
  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div>
            <br />
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
}

Postform.proprtpes = {
  createPost: Proptypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(Postform);
