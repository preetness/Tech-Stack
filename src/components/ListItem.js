import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common/';
import * as actions from '../actions';

class ListItem extends React.Component {
  renderDescription() {
    if (this.props.item.id === this.props.selectedLibraryId) {
      return <Text>{this.props.item.description}</Text>;
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = state => ({ selectedLibraryId: state.selectedLibraryId });

export default connect(mapStateToProps, actions)(ListItem);
