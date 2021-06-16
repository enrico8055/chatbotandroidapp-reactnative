// INSTALLASI
// buka react navigation documentasi ikuti install librarynya
import * as React from 'react';
import { createDrawerNavigator, useIsDrawerOpen } from '@react-navigation/drawer';
import { NavigationContainer} from '@react-navigation/native'; //libary yang dibutuhkan
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import HalamanUtama from './src/HalamanUtama';
import ChatBot from './src/ChatBot';
import About from './src/About';
import PriceList from './src/PriceList';
import Login from './src/Login';
import SignUp from './src/SignUp';
import Logout from './src/Logout';
import LoadingPage from './src/LoadingPage';

const Stack = createStackNavigator(); 
const Drawer = createDrawerNavigator(); 

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
          <Stack.Screen name="LoadingPage" component={LoadingPage}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainPage({route, navigation}) {
  return (
      <Drawer.Navigator initialRouteName="HalamanUtama" drawerContent={props => <CustomSendiriDrawerNya {...props} />}>
        {/* initialparams agar drawer bisa komunikasi dengan stack melalui route params */}
        <Drawer.Screen name="Home" initialParams={{ params: route.params }} component={HalamanUtama} />
        <Drawer.Screen name="Price List" component={PriceList} />
        <Drawer.Screen name="E-CS" component={ChatBot} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
  );
}

function CustomSendiriDrawerNya(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}