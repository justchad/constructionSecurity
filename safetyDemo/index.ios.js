/**
 * Construction Security Demo - Damascus Edge - The Forge
 * https://github.com/justchad/geha_blueberry_demo
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

import Main from './Main';
import Status from './Status';
import Elevator from './Elevator';
import Warning from './Warning';
import Enter from './Enter';


class constructionSecurity extends Component {
  
  renderScene(route, navigator){
    if (route.name == 'Main') {
        return <Main navigator={navigator} />
    }
    if (route.name == 'Status') {
        return <Status navigator={navigator} />
    }
    if (route.name == 'Elevator') {
        return <Elevator navigator={navigator} />
    }
    if (route.name == 'Warning') {
        return <Warning navigator={navigator} />
    }
    if (route.name == 'Enter') {
        return <Enter navigator={navigator} />
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={{name: 'Main'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

AppRegistry.registerComponent('constructionSecurity', () => constructionSecurity);
