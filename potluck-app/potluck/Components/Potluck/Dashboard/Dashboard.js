import React, {
  Component,
} from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import {
  Cell,
  Section,
  Separator,
  TableView,
} from 'react-native-tableview-simple';

const data = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
];

let ExampleWithFlatList;

export default class Dashboard extends Component<{}> {
  render() {
    ExampleWithFlatList = <FlatList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item, separators }) =>
        <Cell
          title={item.title}
          accessory= "DisclosureIndicator"
          onPress={() => console.log('Heyho!')}
          onHighlightRow={separators.highlight}
          onUnHighlightRow={separators.unhighlight}
        />}
      ItemSeparatorComponent={({ highlighted }) =>
        <Separator isHidden={highlighted} />}
    />

    return (
      <View style = {styles.container}>
        {ExampleWithFlatList}      
      </View>
    );
  }
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: '#EFEFF4',
    paddingTop: 0,
    paddingBottom: 0,
  },
  container:{
    paddingTop: 50,
  },
});
