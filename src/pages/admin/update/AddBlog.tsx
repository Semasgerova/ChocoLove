import { useContext } from "react";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../../components/BlogForm";
import { LangContext } from "../../../context/LangContext";
import { addBlogToDatabase } from "../../../myredux/actions/blogAction";

const AddBlog = (props:any) => {
  const navigate = useNavigate();
  const [lang] = useContext(LangContext);

  return (
    <div className="addBlog">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"Bloq əlavə edin":"Add Blog"}</h1>
        {lang==="az"?
         <p className="py-3">
         <LinkContainer to="/blog">
           <span>Bloq</span>
         </LinkContainer>
         // Bloq əlavə edin
       </p>
       :
         <p className="py-3">
         <LinkContainer to="/blog">
           <span>Blog</span>
         </LinkContainer>
         // Add Blog
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
        <BlogForm
          onFormSubmit={(fd: any) => {
            props.dispatch(addBlogToDatabase(fd));
            navigate("/dashboard");
            
          }}
          editblog={null}
        />
      </div>
    </div>
  );
};

export default connect()(AddBlog);

