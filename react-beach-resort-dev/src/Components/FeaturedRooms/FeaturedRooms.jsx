import React, { useContext,useState } from "react";
import { RoomContext } from "../../Context/Context";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import Title from "../Title/Title";

const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useContext(RoomContext);

  // const [loading, setLoading] = useState(true);
  // const [rooms, setRooms] = useState([]);
  const roomElements = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
   < RoomContext.Provider value={{ rooms, loading }}>
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : roomElements}
      </div>
    </section>
    </RoomContext.Provider>
  );
};

export default FeaturedRooms;
