export function messageAppear (setMessage, newMessage) {
  setMessage(newMessage);
  setTimeout(() => {
    setMessage('');
  }, 2000);
};

export function uploadImg (e, setImage, setError) {
  const types = ['image/png', 'image/jpeg'];
  const selectedImage = e.target.files[0];
  if (selectedImage && types.includes(selectedImage.type)) {
    setImage(selectedImage);
    setError('');
  } else {
    setImage('');
    setError('Please select an image file (png or jpeg)');
  }
};