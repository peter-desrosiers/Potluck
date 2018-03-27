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
} from 'react-native';
import {
  Cell,
  Section,
  TableView,
} from 'react-native-tableview-simple';

export default class Dashboard extends Component<{}> {
  render() {
    return (
      <View style = {styles.container}>
        <ScrollView contentContainerStyle={styles.stage}>
          <TableView>
            <Section>
              <Cell cellStyle="Basic" title="Basic" />
              <Cell cellStyle="RightDetail" title="RightDetail" detail="Detail" />
              <Cell
                cellStyle="Subtitle"
                title="Subtitle"
                detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
              />
              <Cell
                cellStyle="Basic"
                title="Pressable w/ accessory"
                accessory="DisclosureIndicator"
                onPress={() => console.log('Heyho!')}
              />
            </Section>
          </TableView>
        </ScrollView>
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
