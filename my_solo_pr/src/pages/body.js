import React, { useState } from "react";
import "../css/body.css";
import App from "../App";
const Body = ({ itemList }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="body">
      <div className="bodyContainer">
        <div className="itemListContainer">
          <h2>상품 리스트</h2>
          {
            <div className="itemList">
              {itemList.slice(0, 4).map((item, index) => (
                <>
                  <ul key={item.id}>
                    <li key={item.id} className="itemName">
                      <div className="itemImg">
                        <img
                          onClick={() => setModal(true)}
                          src={item.image_url || item.brand_image_url}
                        ></img>
                      </div>
                      <br />
                      <div>
                        <ul className="ItemInfo">
                          <span>{item.title || item.brand_name}</span>

                          <span className="follower">
                            {item.brand_name ? "follower" : ""}
                          </span>

                          <li className="discountPercentage">
                            <span>
                              {`${
                                item.discountPercentage === !null
                                  ? `${item.discountPercentage}%`
                                  : ""
                              }`}
                            </span>
                          </li>
                        </ul>

                        <ul className="ItemInfo_sub">
                          <li className="title">
                            <span>{item.sub_title || ""}</span>
                          </li>
                          <li className="discountPercentage">
                            <span>
                              {item.price === null || item.price === undefined
                                ? item.follower
                                : parseInt(item.price).toLocaleString("ko-KR") +
                                  "원"}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </>
              ))}
            </div>
          }
        </div>
        <div className="markList">
          <h2>북마크 리스트</h2>
        </div>
      </div>
    </div>
  );
};
export default Body;
