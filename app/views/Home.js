import React, { Component } from 'react'
import {
    Navigator,
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native'

import NavigationBar from 'react-native-navbar'
import Icon from 'react-native-vector-icons/FontAwesome'

import TextSwitch from '../components/TextSwitch'

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const titleConfig = {
      title: 'HiApp', tintColor: 'black',
    };
    const leftButtonConfig = {
      title: 'Back',
      handler: () => {
        alert('hello');
      }
    }
    let rightButtonConfig = {
      title: 'Forward',
      handler: () => this.props.navigator.push({
        component: NextView,
      }),
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(240,239,245,1)",
        }}>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig}
          rightButton={rightButtonConfig}
          style={{ backgroundColor: "white", }}
          statusBar={{ tintColor: "white", showAnimation: 'slide', hideAnimation: 'slide'}}
        />
       <ScrollView
          horizontal={false}
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: 'stretch',
              backgroundColor: "rgba(155,155,155,0)",
            }}>
            <TextSwitch text="打开 Wifi"/>
            <TextSwitch text="打开 GPS"/>
            <TextSwitch text="打开 Wifi"/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default class Home extends Component {
  render() {
    const initialRoute = {
      component: Index
    };

    return (
      <View style={{ flex: 1, }}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
