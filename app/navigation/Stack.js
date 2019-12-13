import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// grab navigation
import DrawerStack from './DrawerStack';

// grab screens
import ModalHelp from '../screens/ModalHelp';
import ModalTutorialBike from '../screens/ModalTutorialBike';

// grab modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    DrawerStack,

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalHelp: {
      screen: ModalHelp,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ModalTutorialBike: {
      screen: ModalTutorialBike,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'DrawerStack',
    // transitionConfig: ModalRoutes
  }
);

const App = createAppContainer(StackNavigator);

export default App;
