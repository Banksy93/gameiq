import { registerRootComponent } from 'expo';
import Home from './components/home';

export default function App() {
  return (
    <Home></Home>
  );
}

registerRootComponent(App);