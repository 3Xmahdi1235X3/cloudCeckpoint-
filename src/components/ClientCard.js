import React from 'react'
import { Image } from 'react-bootstrap'

const ClientCard = ({
    pic,
    name,
    job
}) => {
  return (
    <div className="card customer-cards">
    <div className="card-body">
      <div className="text-center">
        <Image src={pic} width="89" height="89" alt="" className="img-customer"/>
        <p className="m-0 py-3 text-muted">Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse.</p>
        <div className="content-divider m-auto"></div>
        <h6 className="card-title pt-3">{name}</h6>
        <h6 className="customer-designation text-muted m-0">{job}</h6>
      </div>
    </div>
  </div> )
}

export default ClientCard