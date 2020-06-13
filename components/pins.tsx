import { Marker } from "react-map-gl";

import { Hotel } from "*/add-new-message.graphql";
import Icon from "./icon";

interface PinsProps {
  data: Hotel[];
  onClick: React.Dispatch<React.SetStateAction<Hotel | null>>;
}

export const Pins: React.FC<PinsProps> = ({ data, onClick }) => {
  return (
    <>
      {data.map((hotel) => {
        if (hotel && hotel.coordinates) {
          return (
            <Marker
              key={hotel.id}
              longitude={hotel.coordinates.Y}
              latitude={hotel.coordinates.X}
            >
              <Icon
                active={false}
                name="mapDot"
                size="60px"
                fill="pink"
                onClick={() => onClick(hotel)}
              />
            </Marker>
          );
        } else {
          return (
            <span key="no-id">
              Hotel coordinates for {hotel.name} - {hotel.id} appear to be
              missing!
            </span>
          );
        }
      })}
    </>
  );
};
