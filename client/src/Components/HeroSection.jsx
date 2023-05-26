import React from 'react'
import { useGlobleContext } from '../context';

const HeroSection = () => {
    const {name,title} = useGlobleContext();
  return (
    <section id="section1  " className="banner-section bg-light bg-left">
      <div className="container">
        <div className="row">
            <div className="col-md-5">
             
            </div>
            <div className=" col-md-7">
                <div className="banner-heading">
                <h1>{name}</h1>
                </div>
                <div className="banner-heading-content">
                    <p>{title}</p>
                    <div className="banner-heading-content-points">
                        <ul>
                            <li>Lower total cost of ownership (TCO).</li>
                            <li>Joint marketing opportunities</li>
                            <li>Streamlined administration.</li>
                        </ul>
                    </div>
                </div>
                <div className="download-request-btn">
                    <div className="button">
                        <a href="#" className="btn btn-primary btn-xs mb-2" data-toggle="modal" data-target="#downloadTrial" title="download trial" target="_top">DOWNLOAD TRAIL</a>
                        <a href="#" className="btn btn-primary btn-xs mb-2" data-toggle="modal" data-target="#requestQuote" title="Test Drive request a quote" target="_top">REQUEST A
                         QUIET</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 )
}
export default HeroSection