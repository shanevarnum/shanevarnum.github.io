import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <h2 className="colorlib-heading">About Me</h2>
                    <p> I am an enthusiast for new and exciting technologies and I enjoy dabbling with various tools and tech stacks ranging from the big data realm to web dev to dev ops and beyond! </p>
	            <p> My professional experience includes stints at Pwc and Citi - supporting Assurance, Private Bank and Custody Platforms with duties like: </p>
	            <ul>
	              <li>Data repair, extraction and loading</li> 
	              <li>Database table and index maintenance</li>
	    	      <li>Batch job troubleshooting and efficiency efforts</li>
	              <li>Made to order scripting for automation of heavy manual effort tasks/pre-deployment activities</li>
	              <li>Production deployments, consequential sanity checks and artifact collection</li>
	              <li>Monitoring and preventative action taken to mitigate system or service failure</li>
	    	    </ul>
	            <p> I have been exposed to and worked with: Hadoop, Hbase, Kafka, Java, Bash, SQL (Oracle, SQL Server, MySql, MongoDB, Neo4j), uDeploy, OpenShift and Docker </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">My skills and experience</h2>
            </div>
            </div>
	    <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building web apps and chrome extensions using JavaScript,React,PHP,HTML,and CSS</p>
                </div>
                </div>
            </div>
		     <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Database administration, Data Modeling and ETL</h3>
                    <p>The majority of my experience does involve databases and I am familiar with both relational and non relational databases</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Experience deploying production code with primarily uDeploy, but I have also worked on projects with Docker and Openshift</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
