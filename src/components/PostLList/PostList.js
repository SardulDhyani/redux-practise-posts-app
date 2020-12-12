import React from 'react';
import { connect } from 'react-redux';

import UserHeader from '../UserHeader/UserHeader';

import { fetchPostsAndUsers } from '../../actions';

class PostList extends React.Component{

  renderList() {
    return this.props.posts.map ( (post, index) => 
      <div className="item" key={index}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="description">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.props.fetchPostsAndUsers();
  }

  render(){
    return(
    <div className="ui relaxed divided list">
      {this.renderList()}
    </div>
    );
  };
}

const mapStateToProps = (state) => {
  return { posts : state.posts }
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);