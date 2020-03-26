import React, { Component } from 'react';
import { } from 'react-pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="AIT LAHCEN Ahmed Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>À Propos de Moi</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Coordonnées</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="_Documents/CV.pdf" target = "_blank" className="button"><i className="fa fa-download"></i>Visualiser Mon CV</a>
                     <a href="_Documents/Lettre_de_motivation.pdf" className="button"><i className="fa fa-download"></i>La Lettre de Motivation</a>
                     <a href="_Documents/projet_professionnel.pdf" className="button"><i className="fa fa-download"></i>Le Projet Professionnel</a>
                     <a href="_Documents/fiche_metier.pdf" className="button"><i className="fa fa-download"></i>La Fiche Métier</a>
                     <a href="_Documents/carte_identite_entreprise.pdf" className="button"><i className="fa fa-download"></i>La Carte D'identité des entreprises</a>
                     <a href="_Documents/bilan_personnel.pdf" className="button"><i className="fa fa-download"></i>Le Bilan Personnel</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
