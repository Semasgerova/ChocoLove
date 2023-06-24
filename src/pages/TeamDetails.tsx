import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { LangContext } from "../context/LangContext";
import { ProductContext } from "../context/ProductContext";

const TeamDetails = () => {
  const { url } = useParams();
  const [productItem] = useContext(ProductContext);

  const [lang] = useContext(LangContext);

  const teamdetails = productItem.chef?.find((p: any) => p.id == url);
  const teamdetailsAz = productItem.chefAz?.find((p: any) => p.id == url);

  return (
    <div className="teamDetails">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        {lang==="az"?
        <>
         <h1>{teamdetailsAz.name}</h1>
        <p className="py-3">
          <LinkContainer to="/">
            <span>Ana Səhifə</span>
          </LinkContainer>
          //
          <LinkContainer to="/about">
            <span>Komanda</span>
          </LinkContainer>
          // {teamdetailsAz.name}
        </p>
        </>
        :
        <>
        <h1>{teamdetails.name}</h1>
       <p className="py-3">
         <LinkContainer to="/">
           <span>Home</span>
         </LinkContainer>
         //
         <LinkContainer to="/about">
           <span>Team</span>
         </LinkContainer>
         // {teamdetails.name}
       </p>
       </>
        }
       
      </div>
      <div className="bottom">
        <div className="top">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        {lang==="az"?
         <div className="row align-items-center g-5 py-5 m-0">
         <div className="col-10 col-sm-8 col-lg-6">
           <img
             src={teamdetailsAz.image}
             className="d-block mx-lg-auto img-fluid"
             alt="Bootstrap Themes"
             width={300}
             loading="lazy"
           />
         </div>
         <div className="col-lg-6">
           <h1>{teamdetailsAz.name}</h1>
           <h4>{teamdetailsAz.specialty}</h4>
           <p>{teamdetailsAz.about}</p>
           <p>
             <span>Yaş:</span> {teamdetails.age}
           </p>
           <p>
             <span>Təcrübə:</span> {teamdetails.experience}
           </p>
         </div>
       </div>
        :
        <div className="row align-items-center g-5 py-5 m-0">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={teamdetails.image}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={300}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1>{teamdetails.name}</h1>
          <h4>{teamdetails.specialty}</h4>
          <p>{teamdetails.about}</p>
          <p>
            <span>Age:</span> {teamdetails.age}
          </p>
          <p>
            <span>Experience:</span> {teamdetails.experience}
          </p>
        </div>
      </div>
        }
       
      </div>
    </div>
  );
};

export default TeamDetails;
