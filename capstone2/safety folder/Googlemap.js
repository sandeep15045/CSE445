import React from 'react'
import "./googlemap.css"
function Googlemap() {
    return (
        <div>
              <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828198.4637148925!2d73.2669554736818!3d26.497598542298924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db492641a6ae9%3A0xfe3efa8a58aeaf40!2sI-India%20NGO%20in%20Jaipur%20for%20street%20and%20working%20children!5e0!3m2!1sen!2sin!4v1615436123951!5m2!1sen!2sin"
              width="600"
              height="450"
              frameBorder="0"
           
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
              </div>
    )
}

export default Googlemap
