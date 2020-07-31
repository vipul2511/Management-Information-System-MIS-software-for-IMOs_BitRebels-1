import React, { Component } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Display from './DisplayAppID';
 
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    right:0
  }
});
 
// Create Document Component
class MyDocument extends Component{
 
    state={
        appId:'1455555'
    }
    render(){
        return(
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Application ID</Text>
        <Text>{this.state.appId}</Text>
      </View>
      <table>
      <tr>
          <td>
     <Text>hello</Text>
          </td>
          </tr>
      </table>
      {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
        );
    }
}
export default MyDocument