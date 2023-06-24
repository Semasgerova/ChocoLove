import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { LangContext } from "../context/LangContext";

interface BlogFormType {
  onFormSubmit: any;
  editblog: any;
}

const BlogForm: React.FC<BlogFormType> = ({ onFormSubmit, editblog }) => {
  const [photo, setPhoto] = useState(editblog ? editblog.photo : "");
  const [title, setTitle] = useState(editblog ? editblog.title : "");
  const [desc, setDesc] = useState(editblog ? editblog.desc : "");

  const [lang] = useContext(LangContext);

  const blogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photo || !title || !desc) {
      alert("please, fill this input!");
    } else {
      onFormSubmit({
        photo: photo,
        title: title,
        desc: desc,
      });
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Col md={6} sm={8}>
        <Form onSubmit={blogSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>{lang==="az"?"Şəkil":"Photo"}</Form.Label>
            <Form.Control
              value={photo}
              type="text"
              placeholder="Enter photo link"
              onChange={(e) => {
                setPhoto(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>{lang==="az"?"Başlıq":"Title"}</Form.Label>
            <Form.Control
              value={title}
              type="text"
              placeholder="Enter title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>{lang==="az"?"Təsvir":"Description"}</Form.Label>
            <Form.Control
              value={desc}
              type="text"
              placeholder="Enter Description"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Form.Group>
          <Button className="btn" type="submit">
            {lang==="az"?"Paylaş":"Share"}
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default BlogForm;

