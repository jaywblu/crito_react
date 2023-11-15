import React from 'react'

import img_NewsArticle_01 from "../assets/images/articles-img-1.png"
import img_NewsArticle_02 from "../assets/images/articles-img-2.png"
import img_NewsArticle_03 from "../assets/images/articles-img-3.png"

const NewsSection = () => {
  return (
    <section id="articlesNews" className="container margin-top-large margin-btm-large">
        <div className="row header-button-split">
            <div className="col">
                <span className="section-title">Articles & News</span>
                <h2>Get Every Single Article & News</h2>
            </div>
            <div className="col">
                <button type="button" className="btn">Browse Articles<i className="icon link-icon"></i></button>
            </div>
        </div>
        <div className="grid-wrapper">
            <div className="article-card grid-box">
                <a href="#">
                    <div className="article-image">
                    <img src={img_NewsArticle_01} alt="A smiling woman sitting at a table" />
                    <div className="article-date">
                        <h3>24</h3>
                        <p>Mar</p>
                    </div>
                    </div>
                    <div className="article-category">
                        Business
                    </div>
                    <div className="article-description">
                        <h3>
                            How To Use Digitalization In The Classroom
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                        </p>
                    </div>
                </a>
            </div>
            <div className="article-card grid-box">
                <a href="#">
                    <div className="article-image">
                        <img src={img_NewsArticle_02} alt="A computer screen showing information about AI software" />
                        <div className="article-date">
                            <h3>17</h3>
                            <p>Mar</p>
                        </div>
                    </div>
                    <div className="article-category">
                        Business
                    </div>
                    <div className="article-description">
                        <h3>
                            How To Implement Chat GPT In Your Projects
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                        </p>
                    </div>
                </a>
            </div>
            <div className="article-card grid-box">
                <a href="">
                    <div className="article-image">
                        <img src={img_NewsArticle_03} alt="Litterature about programming" />
                        <div className="article-date">
                            <h3>13</h3>
                            <p>Mar</p>
                        </div>
                    </div>
                    <div className="article-category">
                        Business
                    </div>
                    <div className="article-description">
                        <h3>
                            The Guide To Support Modern CSS Design
                        </h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.
                        </p>
                    </div>
                </a>
            </div>
        </div>
        <div className="pagination">
            <div className="page-item active-page"></div>
            <div className="page-item"></div>
            <div className="page-item"></div>
            <div className="page-item"></div>
            <div className="page-item"></div>
        </div>
    </section>
  )
}

export default NewsSection