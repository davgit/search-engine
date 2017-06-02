import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import '../sass/_MindMapPath.sass';

@connect(store => ({
  path: store.currentUrl,
}))
export default class MindMapPath extends Component {
  render() {
    let path = this.props.path;
    path = path.replace('http://localhost:3000/', '');
    path = path.replace('/_/g');
    return (
    <div className="mind-map-path">
            {path}
        </div>
    );
  }
}

MindMapPath.propTypes = {
  path: PropTypes.string,
};