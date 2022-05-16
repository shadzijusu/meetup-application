import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from 'react'
const DUMMY_DATA = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];
function AllMeetupsPage() {
  const [isloading, setIsLoading] = useState(true)
  const [meetupData, setMeetupData] = useState([])
  useEffect(() => {
    setIsLoading(true)
    fetch("https://meetups-react-1f7be-default-rtdb.firebaseio.com/meetups.json")
    .then(response => {
      return response.json()  
    }).then(data => {
      const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
      setIsLoading(false)
      setMeetupData(meetups)
    }
  })
  }, [])
 
  if(isloading) {
    return <section>
      <p>Loading...</p>
    </section>
  }
  else {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupData}></MeetupList>
    </section>
  );
  }
}

export default AllMeetupsPage;
