import React, { Component } from 'react';
import './App.css';


class Food extends Component {
  render() {
    return (
      <div>
      <h1> This is the Food Blog</h1>

      <div className="wrapper">

          		<div className="card radius shadowDepth1">
          			<div className="card__image border-tlr-radius">
          				<img src="http://lorempixel.com/400/200/food/" alt="food" className="border-tlr-radius" />
                      </div>

          			<div className="card__content card__padding">
                          <div className="card__share">
                              <div className="card__social">
                                  <a className="share-icon facebook" ><span className="fa fa-facebook"></span></a>
                                  <a className="share-icon twitter" ><span className="fa fa-twitter"></span></a>
                                  <a className="share-icon googleplus" ><span className="fa fa-google-plus"></span></a>
                              </div>

                              <a id="share" className="share-toggle share-icon" ></a>
                          </div>

                      				<div className="card__meta">
                      					<a >Web Design</a>
                                          <time>17th March</time>
                      				</div>

                      				<article className="card__article">
                  	    				<h2><a>Material Design Card - For Blog Post Article</a></h2>

                  	    				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
                  	    			</article>
                      			</div>

                      			<div className="card__action">

                      				<div className="card__author">
                      					<img src="http://lorempixel.com/40/40/food/" alt="user" />
                      					<div className="card__author-content">
                      						By <a>John Doe</a>
                      					</div>
                      				</div>
                      			</div>
                      		</div>

                              <p className="text-center">Created By <a href="https://twitter.com/mithicher">Mithicher Baro</a></p>
                      	</div>

      </div>
    )
  }
}

export default Food;
