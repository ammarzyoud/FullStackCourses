import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

export default class Trainers extends Component {
    render() {
        return (
           <React.Fragment>

<div id="Trainers" class="teachers page_section">
	<Navbar/>
		<div class="container" style={{marginTop:"10%"}}>
        <div class="section_title text-center">
                <h1>Best Trainers</h1>
              </div>
			<div class="row">
				
			
				<div class="col-lg-4 teacher">
					<div class="card">
						<div class="card_img">
							<div class="card_plus trans_200 text-center"><a href="#">+</a></div>
							<img class="card-img-top trans_200" src="images/teacher_1.jpg" alt="https://unsplash.com/@michaeldam"/>
						</div>
						<div class="card-body text-center">
							<div class="card-title"><a href="#">Mohammad Jouza</a></div>
							<div class="card-text">Web Developer</div>
							<div class="teacher_social">
								<ul class="menu_social">
									<li class="menu_social_item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-instagram"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-twitter"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				
				<div class="col-lg-4 teacher">
					<div class="card">
						<div class="card_img">
							<div class="card_plus trans_200 text-center"><a href="#">+</a></div>
							<img class="card-img-top trans_200" src="images/teacher_2.jpg" alt="https://unsplash.com/@jcpeacock"/>
						</div>
						<div class="card-body text-center">
							<div class="card-title"><a href="#">Ahmad ALhuwwari</a></div>
							<div class="card-text">UX/UI Manager</div>
							<div class="teacher_social">
								<ul class="menu_social">
									<li class="menu_social_item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-instagram"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-twitter"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				
				<div class="col-lg-4 teacher">
					<div class="card">
						<div class="card_img">
							<div class="card_plus trans_200 text-center"><a href="#">+</a></div>
							<img class="card-img-top trans_200" src="images/teacher_3.jpg" alt="https://unsplash.com/photos/n8jeOSxCRfQ"/>
						</div>
						<div class="card-body text-center">
							<div class="card-title"><a href="#">Alaa mohammad</a></div>
							<div class="card-text">Web Developer</div>
							<div class="teacher_social">
								<ul class="menu_social">
									<li class="menu_social_item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-instagram"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li class="menu_social_item"><a href="#"><i class="fab fa-twitter"></i></a></li>
								</ul>
							</div>
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
