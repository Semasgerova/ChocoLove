import React, { useContext} from "react";
import { connect} from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../components/BlogForm";
import { editBlogFromDatabase, removeBlogFromDatabase } from "../../../myredux/actions/blogAction";
import { LinkContainer } from "react-router-bootstrap";
import { LangContext } from "../../../context/LangContext";
import { Button } from "react-bootstrap";

const EditBlog: React.FC = (props: any) => {
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);

  return (
    <div className="editBlog">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"Bloqu redaktə edin":"Edit Blog"}</h1>
        {lang==="az"?
        <p className="py-3">
        <LinkContainer to="/blog">
          <span>Bloq</span>
        </LinkContainer>
        // Bloqu redaktə edin
      </p>
      :
        <p className="py-3">
        <LinkContainer to="/blog">
          <span>Blog</span>
        </LinkContainer>
        // Edit Blog
      </p>
        }
      </div>
      <div className="bottom">
        <div className="top-img">
          <img
            src="http://crems.like-themes.com/wp-content/themes/crems/assets/images/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <div className=" mt-2 d-flex align-items-center justify-content-start">
            <div className="col-9 d-flex align-items-center justify-content-end">
            <Button variant='danger'
            onClick={()=>{props.dispatch(removeBlogFromDatabase(props.pvalue.id))
            navigate('/dashboard')
          }
            }>Delete</Button>
            </div>
          </div>
        <BlogForm
          editblog={props.pvalue}
          onFormSubmit={(fd:any) => {
            props.dispatch(editBlogFromDatabase(props.pvalue.id, fd));
            navigate("/dashboard");
          }}
        />
         
      </div>
    </div>
  );
};

const MapStateToProps = (state: any) => {
  const link = window.location.pathname.slice(16, 99);
  return {
    pvalue: state.find((p: any) => p.id === link),
  };
};

export default connect(MapStateToProps)(EditBlog);

