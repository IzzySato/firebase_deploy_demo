import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import { storage, db } from '../../firebase';
import './Event.css';
import { messageAppear, uploadImg } from './Utility';

const Event = ({image, name, description, id, imgUrl, userID}) => {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [updateForm, setUpdateForm] = useState('none');
  const [detail, setDetail] = useState('none');
  const [detailBtnName, setDetailBtnName] = useState('SEE MORE');
  const [newImg, setNewImg] = useState(image);
  const [newImgUrl, setNewImgUrl] = useState(imgUrl);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const openCloseUpdateForm = () =>
    (updateForm === 'none') ? setUpdateForm('block') : setUpdateForm('none');

  const updateEventToFirestore = (url) => {
    db.collection('events').doc(id).update({
      description: newDescription,
      name: newName,
      imgUrl: url
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (newImg.name === undefined) {
      updateEventToFirestore(newImgUrl);
    } else {
      const uploadTask = storage.ref(`images/${newImg.name}`).put(newImg);
      uploadTask.on(
        'state_changed',
        snapshot => {},
        error => {
          console.log(error);
        },
        () => {
          storage
          .ref('images')
          .child(newImg.name)
          .getDownloadURL()
          .then(url => {
            updateEventToFirestore(url);
            setNewImgUrl(url);
          });
        }
      );
    }
    openCloseUpdateForm();
    messageAppear(setMessage, 'Successfully Updated');
  };

  const deleteSavedEvent = () => {
    db.collection('users')
      .doc(userID)
      .get()
      .then(
        result => {
          const { savedEvents } = result.data();
          if(savedEvents.includes(id)){
            const newArray = savedEvents.filter( e => e !== id);
            db.collection('users')
              .doc(userID)
              .set(
            { savedEvents: newArray },
            { merge: true }
          )
          }
        }
      );
  }

  const deleteEvent = () => {
    deleteSavedEvent();
    db.collection('events').doc(id).delete();
  };

  const seeMore = () => {
    if (detail === 'none') {
      setDetail('block');
      setDetailBtnName('SEE LESS');
    } else {
      setDetail('none');
      setDetailBtnName('SEE MORE');
    }
  };

  const updateOrInsert = e => {
    db.collection('users')
    .doc(userID)
    .get()
    .then(
      result => {
        const { savedEvents } = result.exists ? result.data() : { savedEvents: [] };
        if(savedEvents.includes(id)){
          messageAppear(setMessage,'The event is already in your dashboard');
          return;
        }
        const newArray = [...savedEvents, id];
        db.collection('users')
        .doc(userID)
        .set(
          { savedEvents: newArray },
          { merge: true }
        );
        messageAppear(setMessage, 'Successfully Added');
      }
    );
    e.preventDefault();
  };

  return (
        <div className="m-5" key={id}>
          <div>
            { message && <div className="messageDiv"><p className="message">{message}</p></div>}
          </div>
          <div className="dataContainer">
            <div>
              <h3 className="mb-3">{name}</h3>
              <img className="eventImages" src={imgUrl} alt="event"/>
              <div style={{display: detail}}>
                <p>{description}</p>
              </div>
              <button id="viewDetailBtn" onClick={seeMore}>{detailBtnName}</button>
            </div>
            <div className="eventBtns">
              <button onClick={deleteEvent} className="eventBtn">DELETE</button>
              <button onClick={openCloseUpdateForm} className="eventBtn">EDIT</button>
              <button onClick={updateOrInsert} className="eventBtn saveBtn">SAVE</button>
            </div>
          </div>

          <div>
            <Form className="updateForm" style={{display: updateForm}}>
              <Form.Group>
                <h2 className="formTitle">Update Event Form</h2>
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="name"
                defaultValue={name}
                onChange={(e) => setNewName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}
                defaultValue={description}
                onChange={(e) => setNewDescription(e.target.value)}/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.File type="image" onChange={(e) => uploadImg(e, setNewImg, setError)}/>
                  <div>
                    { error && <div><p className="errorMessage">{error}</p></div>}  
                  </div>
                </Form.Group>
              <button type="cancel" className="eventBtn cancelBtn" onClick={openCloseUpdateForm}>Cancel</button>
              <button className="eventBtn" type="submit" onClick={handleUpload}>Update</button>
            </Form>
          </div>
        </div>
  );
};

export default Event;