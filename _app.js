import { Provider } from 'mobx-react';

import allStores from '../stores/allStores';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/main.css';
import '../styles/fonts.css';
import '../styles/backoffice.css';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...allStores}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
