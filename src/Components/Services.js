import React from 'react'
import Title from './Title'
import { service } from './data'

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" title2="services" />
        <div className="section-center services-center">

          {service.map((serve) => {
            return (
              <article className="service" key={serve.id}>
                <span className="service-icon"><i className={serve.icon}></i></span>
                <div className="service-info">
                  <h4 className="service-title">{serve.title}</h4>
                  <p className="service-text">
                    {serve.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  )
}

export default Services
