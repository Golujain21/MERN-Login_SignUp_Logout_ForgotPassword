import React from 'react'

const Contract = () => {
  return (
    <section className="location-block">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="location-map">
              <h2>find your closest daybreak</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7577636092747!2d75.89295271421827!3d22.737243285098337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4de8379fff%3A0xd9eef0e76ba7c3ec!2sNewTechFusion!5e0!3m2!1sen!2sin!4v1646995077514!5m2!1sen!2sin" width="100%" height="300" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
        <div class="submit-form">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
              <form action="" class="text-center">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Phone Name" />
                <input type="text" placeholder="Email Name" />
                <input type="text" placeholder="message" class="w-100 message-box" />
                <button class="btn btn-primary px-5 my-4">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contract