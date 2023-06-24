import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import SingleBlog from "../components/SingleBlog";
import { useContext} from "react";
import { LangContext } from "../context/LangContext";

interface propType{
  pvalue:any
}

const Blog:React.FC<propType> = props => {
  const [lang]=useContext(LangContext);

  return (
    <div className="blog">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"Bloq":"Blog"}</h1>
      {lang==="az"?
        <p className="py-3">
        <LinkContainer to="/">
          <span>Ana Səhifə</span>
        </LinkContainer>
        // Bloq
      </p>:
        <p className="py-3">
        <LinkContainer to="/">
          <span>Home</span>
        </LinkContainer>
        // Blog
      </p>}
      </div>
      <div className="bottom py-5">
        <div className="image">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <div className="container">
          {props.pvalue.map((item: any, c: number) => (
            <SingleBlog
              title={item.title}
              desc={item.desc}
              photo={item.photo}
              key={c}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: string) => {
  return {
    pvalue: state
  };
};

export default connect(mapStateToProps)(Blog);
