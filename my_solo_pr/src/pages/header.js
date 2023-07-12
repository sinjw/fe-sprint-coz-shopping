import "../css/header.css";
import logo from "../img/logo.png";
import cateBtn from "../img/Cate_btn.png";
import shopName from "../img/Shop_name.png";
import bookMark from "../img/북마크 페이지 버튼.jpg";
import ItemList from "../img/상품리스트 페이지 버튼.jpg";
import Hello from "../img/인사말.jpg";
import Polygon from "../img/Polygon.png";
import { Link } from "react-router-dom";
import "../css/header.css";
import { useState } from "react";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const cateBtnOpen = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };
  return (
    <div>
      <div className="headerWrap">
        <ul className="headerContainer">
          <li>
            <Link to="/">
              <img src={logo}></img>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={shopName}></img>
            </Link>
          </li>
          <li onClick={cateBtnOpen}>
            <img src={cateBtn}></img>
          </li>
          <li className={openModal ? "open" : "close"}>
            <ul>
              <li>
                <img src={Polygon}></img>
              </li>
              <li>
                <Link to="/bookmark">
                  <img src={bookMark}></img>
                </Link>
              </li>
              <li>
                <Link to="/itemlist">
                  <img src={ItemList}></img>
                </Link>
              </li>
              <li>
                <img src={Hello}></img>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
