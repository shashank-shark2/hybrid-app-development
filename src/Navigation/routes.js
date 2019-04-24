import HomeScreen from '../Views/Home'
import ProfileScreen from '../Views/Profile';
import EventsScreen from '../Views/Events';
import AboutScreen from '../Views/About';
import ProjectsScreen from '../Views/Projects';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  {name: 'Home', screen: HomeScreen, icon: 'airplane-takeoff'},
  {name: 'Profile', screen: ProfileScreen, icon: 'airplane-takeoff'},
  {name: 'Events', screen: EventsScreen, icon: 'compass-outline'},
  {name: 'About', screen: AboutScreen, icon: 'information-outline'},
  {name: 'Projects', screen: ProjectsScreen, icon: 'account-circle'},
];
