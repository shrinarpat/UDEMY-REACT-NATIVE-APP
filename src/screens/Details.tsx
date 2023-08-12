import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Users from './Users';
import Setting from './Setting';

const Tab = createMaterialTopTabNavigator();

const Details = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Users} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default Details;
