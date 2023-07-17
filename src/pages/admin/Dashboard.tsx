import { Button, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import DashboardItem from "../../components/DashboardItem";
import { LinkContainer } from "react-router-bootstrap";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const [lang] = useContext(LangContext);
  const selectdata:any = useSelector(state => state);

  return (
    <div className="dashboard">
      <div className="main d-flex flex-column justify-content-center align-items-center h-100">
        <h1>{lang==="az"?"İdarə paneli":"Dashboard"}</h1>
        {lang==="az"?
         <p className="py-3">
         <LinkContainer to="/blog">
           <span>Bloq</span>
         </LinkContainer>
         // İdarə paneli
       </p>
        :
         <p className="py-3">
         <LinkContainer to="/blog">
           <span>Blog</span>
         </LinkContainer>
         // Dashboard
       </p>
        }
      </div>
      <div className="bottom">
        <div className="top-img">
          <img
            src="https://raw.githubusercontent.com/Semasgerova/images/main/grunge-dark-temp.png"
            alt=""
          />
        </div>
        <Container className="py-5">
          <LinkContainer to="/dashboard/add">
            <Button className="btn">{lang==="az"?"Əlavə et":"Add"}</Button>
          </LinkContainer>
          <Table striped bordered hover className="tab">
            <thead>
             {lang==="az"?
              <tr>
              <th>#</th>
              <th>Şəkil</th>
              <th>Başlıq</th>
              <th>Təsvir</th>
              <th>Redaktə et</th>
            </tr>
             :
              <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Title</th>
              <th>Description</th>
              <th>Edit</th>
            </tr>
             }
            </thead>
            <tbody>
              {selectdata.map((item: any, i: number) => {
                return (
                  <DashboardItem
                    key={i}
                    title={item.title}
                    desc={item.desc}
                    photo={item.photo}
                    count={i}
                    id={item.id}
                  />
                );
              })}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};


export default Dashboard;
