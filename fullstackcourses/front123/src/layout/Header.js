import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
  <React.Fragment>
  <div id="Home" class="home">
    
    <div class="hero_slider_container">
      <div class="hero_slider owl-carousel">
        
       
        <div class="hero_slide">
          <div class="hero_slide_background" style={{backgroundImage:"url(images/slider_background.jpg)"}}></div>
          <div class="hero_slide_container d-flex flex-column align-items-center justify-content-center">
            <div class="hero_slide_content text-center">
              <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut"><span>Get your Tutorial today!</span></h1>
            </div>
          </div>
        </div>
        
        <div class="hero_slide">
          <div class="hero_slide_background" style={{backgroundImage:"url(images/slider-2.jpg)"}}></div>
          <div class="hero_slide_container d-flex flex-column align-items-center justify-content-center">
            <div class="hero_slide_content text-center">
              <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut"> <span>Find your Best Tutorial!</span> </h1>
            </div>
          </div>
        </div>
        
       
        <div class="hero_slide">
        <div class="hero_slide_background" style={{backgroundImage:"url(images/slider-3.jpg)"}}></div>
          <div class="hero_slide_container d-flex flex-column align-items-center justify-content-center">
            <div class="hero_slide_content text-center">
              <h1 data-animation-in="fadeInUp" data-animation-out="animate-out fadeOut"> <span> Add Best Tutorial</span></h1>
            </div>
          </div>
        </div>

      </div>

      <div class="hero_slider_left hero_slider_nav trans_200"><span class="trans_200">prev</span></div>
      <div class="hero_slider_right hero_slider_nav trans_200"><span class="trans_200">next</span></div>
    </div>

  </div>
          </React.Fragment>
        )
    }
}
