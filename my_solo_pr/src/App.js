import logo from "./logo.svg";
import Header from "./pages/header";
import Body from "./pages/body";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  const [itemList, setItemList] = useState([]);
  const url = "http://cozshopping.codestates-seb.link/api/v1/products?count=10";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API 요청에 실패했습니다.");
        }
        return response.json(); // JSON 형식으로 응답 데이터를 파싱
      })
      .then((data) => {
        setItemList(data);
        console.log(data);
        console.log("응답");
        // 여기서부터는 ITEMLIST 변수를 사용하여 원하는 작업을 수행할 수 있습니다.
        // 예: 데이터를 화면에 렌더링하거나 다른 로직에 활용하기 등
      })
      .catch((error) => {
        console.error("API 요청 중 오류가 발생했습니다:", error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Body itemList={itemList} />
    </div>
  );
}

export default App;
