import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "../Components/Room";

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (await axios.get("/api/rooms/getallrooms")).data;

        setRooms(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function here
  }, []); // Empty dependency array to run effect only on mount

  return (
    <>
      <div className="row">
        {loading ? (
          <h1>loading......</h1>
        ) : error ? (
          <h1>error...</h1>
        ) : (
          rooms.map((room) => {
            return <div className="col-md-9" key={room._id}>
                <Room room = {room}/>
            </div>;
          })
        )}
      </div>
    </>
  );
};

export default HomeScreen;
