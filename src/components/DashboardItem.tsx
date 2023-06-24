import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { LangContext } from "../context/LangContext";

interface DashboardItemProp {
  count: number;
  photo: string;
  title: string;
  desc: string;
  id: number;
}

const DashboardItem: React.FC<DashboardItemProp> = ({
  count,
  photo,
  title,
  desc,
  id,
}) => {
  const [lang] = useContext(LangContext);
  return (
    <tr>
      <td>{count + 1}</td>
      <td>
        <img width={100} src={photo} alt="" />
      </td>
      <td>{title}</td>
      <td>{desc.substring(0, 100)}...</td>
      <td>
        <LinkContainer to={`/dashboard/edit/${id}`}>
          <Button className="button">{lang==="az"?"Redaktə et":"Edit"}</Button>
        </LinkContainer>
      </td>
     
    </tr>
  );
};

export default DashboardItem;
