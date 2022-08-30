import '../styles/globals.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { TripsterProvider } from '../context/tripsterContext';

function MyApp({ Component, pageProps }) {
  return (
    <TripsterProvider>
      <Component {...pageProps} />
    </TripsterProvider>
  );
}

export default MyApp;
