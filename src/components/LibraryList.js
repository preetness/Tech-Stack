import React from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends React.Component {
  componentWillMount() {
    const source = ListView.DataSource({
      rowHasChanged: (rowOne, rowTwo) => rowOne !== rowTwo,
    });
    this.dataSource = source.cloneWithRows(this.props.libraries);
  }

  renderRow() {
    return <ListItem library={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

export default connect(mapStateToProps)(LibraryList);
