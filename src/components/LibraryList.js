import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends React.Component {
  componentWillMount() {
    const source = ListView.DataSource({
      rowHasChanged: (rowOne, rowTwo) => rowOne !== rowTwo,
    });
    this.dataSource = source.cloneWithRows(this.props.libraries);
  }
  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
