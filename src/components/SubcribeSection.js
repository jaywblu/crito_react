import React from 'react'

const SubcribeSection = () => {
  return (
    <section id="subscribe" className="container padding-top-large padding-btm-large">
        <div className="row header-button-split">
            <div className="col">
                <h2>Get News Updates By Signup</h2>
            </div>
            <div className="col">
                <form action="">
                    <input className="form-control" type="email" required placeholder="username@domain.com" />
                    <button type="submit" className="btn btn-primary">Subscribe<i className="icon link-icon"></i></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default SubcribeSection