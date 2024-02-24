import Spinner from 'react-bootstrap/Spinner';
import './App.css';
import Footer from './footer';
import Header from './header';
import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Uvod from './Uvod/uvod';

function App() {

  const [image, setImage] = useState();
  const [iUrl, setIurl] = useState(null);
  const [iUrl2, setIurl2] = useState(null);
  const [klik, setKlik] = useState(false)


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setIurl(URL.createObjectURL(selectedImage));
  };

  const handleUploadImage = () => {

    setKlik(true);
    const data = new FormData();
    data.append('file', image);
    const requestDATA = {
      method: 'POST',
      baseURL: 'http://127.0.0.1:5000', // baseUrl + url === complited url
      url: '/uploader',
      data: data,
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
    
    setIurl2(null);
    axios(requestDATA).then(response => new Blob([response.data]))
    .then(blob => {
      const imageURL = URL.createObjectURL(blob);
      setIurl2(imageURL)
      setKlik(true)
    }).catch(err => console.log('Error je ovdje:', err));
  } 

  const Slika2Component = () => {
    return (
      <>
        {iUrl2?<img src={iUrl2} width="450px" height="350px" />:<div style={{flex:1,display:'flex', justifyContent:'center', alignItems:'center'}}><Spinner  animation="border" variant="primary" /></div>}
    </>
    )
  }
  const SlikeComponent = () => {
    return (
      <div className='OkvirSlike'>
          <div className='gornji'>
          <img src={iUrl} width="450px" height="350px" />
          { klik == true ? <Slika2Component /> : <></> }
        </div>
          <div className='donji'>
            <h3 style={{ flex: 1, display:'flex', justifyContent:'center'}}><b>Before</b></h3> 
             { klik == true ? <h3 style={{flex:1, display:'flex', justifyContent:'center'}}><b>After</b></h3> : <></> }  
          </div>
        </div>
    )
  }
  return (
    <div className="App">
      <Header/>
      <div className='Middle'>
        <Uvod/>
        <h1 style={{margin:'20px'}}>Try the model</h1>
        <div style={{display: 'flex', justifyContent:'row'}}>
          <input type="file" name="file" onChange={handleImageChange} />
        <input type="submit" onClick={handleUploadImage} />  
        </div>
        <Button variant="danger" style={{ margin: '10px 0px', width: '100px' }} onClick={() => { setKlik(false); setIurl(null); setIurl2(null)}}>Clean</Button>
        {iUrl?<SlikeComponent/>:null}

      </div>
      <Footer/>
    </div>
  );
}

export default App;
