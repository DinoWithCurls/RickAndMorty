import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
//Create the params list with the params&their types required by the screens
export type RouteParamList = {
  Onboarding: undefined;
  Home: undefined;
};

//Create two props, namely navigation(for navigation specifically) and route(for passing props via navigation),
// and initialise them with a type which can be declared at runtime
export type RootStackParamList<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
};
