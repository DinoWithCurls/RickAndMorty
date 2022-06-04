import React from 'react';
import {View, Text} from 'react-native';
import ComponentStyle from '../styles/components';
//Component for displaying the subheaders with lines on both sides
const SubHeader = ({title}: any) => {
  return (
    <View style={ComponentStyle.subHeaderContainer}>
      <View style={ComponentStyle.subHeaderLine} />
      <View>
        <Text style={ComponentStyle.subHeaderText}>{title}</Text>
      </View>
      <View style={ComponentStyle.subHeaderLine} />
    </View>
  );
};

export default SubHeader;