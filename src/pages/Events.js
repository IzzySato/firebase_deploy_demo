/*
References:
https://www.youtube.com/watch?v=NsHnVSJukj0
@author Sanskar Tiwari

https://www.youtube.com/watch?v=8r1Pb6Ja90o&t=794s
@author Hong Ly
*/

import React, {useEffect, useState} from 'react';
import NavBar from '../components/navbar/Navbar';
import { Form, Card } from 'react-bootstrap';
import { storage, db, auth } from '../firebase';
import Event from '../components/Event/Event';
import '../components/Event/Event.css';
import { messageAppear, uploadImg } from '../components/Event/Utility';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [userID, setUserID] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  let processing = false;

  useEffect (()=> {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserID(user.uid);
      } else {
        console.log('need to sign in');
      }
    });
    getEvents();
  }, []);

  const getEvents = () => {
    db.collection('events').onSnapshot((querySnapshot) => {
        setEvents(
          querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          imgUrl: doc.data().imgUrl,
          description: doc.data().description
        }))
      );
    });
  };

  const addEventToFirestore = (url) => {
    db.collection('events').add({
      description,
      name,
      imgUrl: url
    });
    setName('');
    setDescription('');
    processing = false;
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (processing) return;
    processing = true;
    const imgFile = document.querySelector('#imgFile');
    if (imgFile.files.length === 0) {
      return;
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.log(error);
        processing = false;
      }, () => {
        storage
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          setImage('');
          imgFile.value = '';
          addEventToFirestore(url);
        });
      }
    );
    messageAppear(setMessage, 'Successfully Added');
  };

  return (
    <>
      <NavBar />
      <h2 className="eventTitle text-center">Events</h2>
        <div className="text-left mt-5">
          <Card id="addForm">
            <Card.Body>
              <div>
                { message && <div className="messageDiv"><p className="message">{message}</p></div>}
              </div>
              <h3>Add a New Event</h3>
              <Form className="px-1">
                <Form.Group id="eventName">
                  <Form.Label>Event Name</Form.Label>
                  <Form.Control type="name" required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group id="desc">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group id="image">
                  <Form.Label>Image</Form.Label>
                  <Form.File id="imgFile" onChange={(e) => uploadImg(e, setImage, setError)} required/>
                  <div>
                    { error && <div><p className="errorMessage">{error}</p></div>} 
                  </div>
                  <button id="uploadBtn" className="eventBtn" type="submit" onClick={handleUpload}>SAVE</button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
          <Card className="mt-5">
            <Card.Body className="px-5">
              {events.map((event) => (
                  <Event
                  key={event.id}
                  name={event.name}
                  imgUrl={event.imgUrl}
                  image = {image}
                  description={event.description}
                  id={event.id}
                  userID={userID}
                  />
                ))}
            </Card.Body>
          </Card>
        </div>
    </>
  );
};

export default Events;