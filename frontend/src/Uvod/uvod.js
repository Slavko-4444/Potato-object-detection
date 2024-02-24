import React from 'react'
import Analiza from './pred.jpg'
import F1 from './F1_curve.png'
import './uvod.css';
export default function Uvod() {
  return (
    <div className='glavni'>
      <div className='lijevo'>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Detecting potato plant disease</h2>
        <hr/>
        <p >
            The
            greatest damage to potato crops is caused by viral, bacterial and fungal diseases.
            The first signs of the disease can be seen on the leaf. Developing a model that
            could detect potato leaf diseases in its earlier stages would be of great importance to
            farmers.  Adaptation   of   these   models   and   daily   observations   would   lead   to   the
            recognition and suppression of the disease in the stages when the disease first
            appeared. The model was built with the help of overtrained <b>YOLO</b> model, version 8. The   model   is trained on convolutional neural networks.
        </p>
        <p>Disease that model detects with precision-recall performances over 0.78 are</p>
        <div style={{flex:'1', display:'flex', justifyContent:"col"}}>

        <ul>
          <li>Late Blight</li>
          <li>Nematoden</li>
          <li>Phytophthora</li>
        </ul>
        <ul>
          <li>Edgar Mitchell</li>
          <li>YVirus</li>
        </ul>
        </div>

      </div>
      <div className='desno' style={{display:'flex', flexDirection:'column'}}>
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>Examples</h2>
        <div style={{flex:1, display:"flex", justifyContent:"center", alignItems:'center'}}>
          <img src={Analiza} alt="Image" />
        </div>
        <div>
          <p style={{marginInline:'8px'}}> The proposed model has been   implemented   and   adapted   for   use   in   the   veb   application.   Images   and
            recordings can be used as input elements.
          </p>
        </div>
      </div>
    </div>
  )
}
