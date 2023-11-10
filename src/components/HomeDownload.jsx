import React from 'react'
import googlePlay from '../assets/google-play.svg';
import appStore from '../assets/app-store.svg';

function HomeDownload() {
  return (
    <section className='download'>
        <div className="container">
            <div className="download-section">
                <h2>Download our app to get most out of it</h2>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div className="download-imgs">
                    <img onClick={() => alert('The app does not exist, this is just an example!')} src={googlePlay} alt="" />
                    <img onClick={() => alert('The app does not exist, this is just an example!')} src={appStore} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeDownload