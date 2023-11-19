import React from 'react'
import { Link } from 'react-router-dom'

const PageTitleSection = ({title, pageName}) => {
  return (
    <section id="contactHeader" className="container">
        <div className="row">
            <div className="col">
                <div className="breadcrumb">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>{pageName}</li>
                    </ul>
                </div>
                <h1>{title}</h1>
            </div>
        </div>
    </section>
  )
}

export default PageTitleSection