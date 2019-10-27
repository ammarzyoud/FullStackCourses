import React, { Component } from 'react'
import Navbar from '../components/Navbar'

export default class Popular extends Component {
    render() {
        return (
           <React.Fragment>
             <Navbar/>
                <div id="popular" class="popular page_section">
        <div class="container" style={{marginTop:"10%"}}>
          <div class="row">
            <div class="col">
              <div class="section_title text-center">
                <h1>Popular Courses</h1>
              </div>
            </div>
          </div>
    
          <div class="row course_boxes">
            
          
            <div class="col-lg-4 course_box">
              <div class="card">
                <img class="card-img-top" src="images/course_1.png" alt="https://unsplash.com/@kellybrito"/>
                <div class="card-body text-center">
                  <div class="card-title"><a href="courses.html">Udemy.com </a></div>
                  <div class="card-text">is the world's largest online learning etc...</div>
                </div>
               
              </div>
            </div>
    
           
            <div class="col-lg-4 course_box">
              <div class="card">
                <img class="card-img-top" src="images/course_2.png" alt="https://unsplash.com/@cikstefan"/>
                <div class="card-body text-center">
                  <div class="card-title"><a href="courses.html">Udacity, Inc</a></div>
                  <div class="card-text">is a for-profit educational organization  etc...</div>
                </div>
              
              </div>
            </div>
    
            
            <div class="col-lg-4 course_box">
              <div class="card">
                <img class="card-img-top" src="images/course_3.jpg" alt="https://unsplash.com/@dsmacinnes"/>
                <div class="card-body text-center">
                  <div class="card-title"><a href="courses.html">edX.com</a></div>
                  <div class="card-text">course provider. It hosts online university-level...</div>
                </div>
              
              </div>
            </div>
          </div>
        </div>		
      </div>
           </React.Fragment>
        )
    }
}
