import React from 'react'

import img_Testimonial_01 from "../assets/images/testimonial-img-1.png"
import img_Testimonial_02 from "../assets/images/testimonial-img-2.png"
import img_Testimonial_03 from "../assets/images/testimonial-img-3.png"
import TestimonialComponent from './TestimonialComponent'
import ButtonLink from '../utils/ButtonLink'

const testimonials = [
    {
        score: 5,
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
        imageUrl: img_Testimonial_01,
        name: "Cassandra Warren",
        businnesInfo: "Business Manager, Dorfus"
    },
    {
        score: 5,
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
        imageUrl: img_Testimonial_02,
        name: "Amanda Tulling",
        businnesInfo: "Senior Developer, Square"
    },
    {
        score: 5,
        quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate",
        imageUrl: img_Testimonial_03,
        name: "Jack McDogglas",
        businnesInfo: "Key Account Manager, Gobon"
    }
]

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="container padding-top-small padding-btm-large">
        <div id="testimonialsWrapper" className="padding-top-large padding-btm-large">
            <div id="testimonialsHeader">
                <span className="section-title">Testimonials</span>
                <h2>What Our Clients Say</h2>
            </div>
            <div id="testimonialsContent" className="grid-wrapper">
                {
                    testimonials.map((testimonial, index) => (
                        <TestimonialComponent 
                            key={index}
                            score={testimonial.score} 
                            quote={testimonial.quote} 
                            imageUrl={testimonial.imageUrl} 
                            name={testimonial.name} 
                            businnesInfo={testimonial.businnesInfo}>
                        </TestimonialComponent>
                    ))
                }
            </div>
            <div id="testimonialsFooter">
                <ButtonLink color="dark" text="All Reviews" url="/testimonials"></ButtonLink>
            </div>
        </div>
    </section>
  )
}

export default TestimonialsSection