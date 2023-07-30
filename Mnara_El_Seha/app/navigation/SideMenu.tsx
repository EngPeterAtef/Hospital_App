import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from '../assets/values/Colors';
import CustomDrawer from '../components/CustomDrawer';
import { LoginScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';


const Drawer = createDrawerNavigator();

function Home() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'lucida grande', color: 'black' }}>Home</Text>
    </SafeAreaView>
  );
}

export default function SideMenu(): JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props: any) => <CustomDrawer {...props} />}
        initialRouteName="Login" //TODO: should be the grid screen
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: Colors.primary2,
          drawerActiveTintColor: Colors.primary1,
          drawerInactiveTintColor: Colors.primary1,
          drawerLabelStyle: {
            marginLeft: -25,
            fontSize: 15,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name={'Login'}
          component={LoginScreen}
          options={{
            title: 'تسجيل الدخول',
            drawerIcon: () => (
              <Entypo name="login" size={22} color={Colors.primary1} style={{ paddingRight: 5 }} />
            ),
          }}
        />
        <Drawer.Screen
          name={'Home'}
          component={Home}
          options={{
            title: list[0],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon1.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp1'}
          component={Home}
          options={{
            title: list[1],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon2.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp3'}
          component={Home}
          options={{
            title: list[2],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon3.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp4'}
          component={Home}
          options={{
            title: list[3],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon4.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp5'}
          component={Home}
          options={{
            title: list[4],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon5.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp6'}
          component={Home}
          options={{
            title: list[5],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon6.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp7'}
          component={Home}
          options={{
            title: list[6],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon7.png')} />
            ),
          }}
        />
        <Drawer.Screen
          name={'temp8'}
          component={Home}
          options={{
            title: list[7],
            drawerIcon: () => (
              <Image source={require('../assets/images/menu_icon8.png')} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const list = [
  'الاقسام الطبية',
  'التبرع بالدم والصفائح الدموية',
  'احالتي',
  'الكشف المبكر لأورام الثدي',
  'تجربتي',
  'التعليمات والارشادات',
  'التثقيف الطبي',
  'طلبات الزوار',
];
