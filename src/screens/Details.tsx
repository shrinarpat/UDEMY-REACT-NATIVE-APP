import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Profile from './Profile';
import Setting from './Setting';
import Posts from './Posts';

const Tab = createMaterialTopTabNavigator();

const Details = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blog" component={Posts} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default Details;
