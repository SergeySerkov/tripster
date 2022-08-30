import { useEffect, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { TripsterContext } from '../context/tripsterContext';

const style = {
  wrapper: `flex-1 h-full w-full overflow-x-hidden`,
};

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const Map = () => {

  const { pickupCoordinates, dropoffCoordinates } = useContext(TripsterContext);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/sergey16/cl77awhz6002s15qh5mula19t',
      zoom: 10,
      center: [37.5, 55.75],
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 400,
      });
    }

  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return (
    <div className={style.wrapper} id='map' />
  );
};

export default Map;