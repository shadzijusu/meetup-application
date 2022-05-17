import MeetupList from "../components/meetups/MeetupList";
import { useEffect, useState } from "react";

function AllMeetupsPage() {
  const [isloading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meetups-react-1f7be-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
          setIsLoading(false);
          setMeetupData(meetups);
        }
      });
  }, []);

  if (isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={meetupData}></MeetupList>
      </section>
    );
  }
}

export default AllMeetupsPage;
