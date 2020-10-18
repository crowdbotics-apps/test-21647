import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList55147312Navigator from '../features/NotificationList55147312/navigator';
import Maps147238Navigator from '../features/Maps147238/navigator';
import Add-Item147237Navigator from '../features/Add-Item147237/navigator';
import Maps147233Navigator from '../features/Maps147233/navigator';
import UserProfile147229Navigator from '../features/UserProfile147229/navigator';
import Settings147192Navigator from '../features/Settings147192/navigator';
import Settings147175Navigator from '../features/Settings147175/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList55147312: { screen: NotificationList55147312Navigator },
Maps147238: { screen: Maps147238Navigator },
Add-Item147237: { screen: Add-Item147237Navigator },
Maps147233: { screen: Maps147233Navigator },
UserProfile147229: { screen: UserProfile147229Navigator },
Settings147192: { screen: Settings147192Navigator },
Settings147175: { screen: Settings147175Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
