import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Mainview, { Balancebox, Middletitle, Minititle, Titlebox } from "../../../components/StyledTag";

export default function BalancePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res) => {
        setData(res.balance.find((item) => item.id === parseInt(id, 10)));
        setAllData(res.balance);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!data || !allData)
    return (
      <div>
        <Link to="/value">
          <button>Value</button>
        </Link>
      </div>
    );

  const next = parseInt(id, 10) + 1;

  if (next == 12) {
    return (<Link to="/balance/loading"></Link>)
  }

  const BalanceData = (value) => {

    axios.post("https://chemylab.shop/balance", { value }, {
      headers: {
        Authorization: `Bearer ${token}` // 헤더에 토큰 포함해서 요청 보내기
      }
    })
    .then()
    .catch(error => console.error("There was an error!", error));
  };

  return (
    <Mainview>
      
      <Titlebox style={{justifyContent: 'space-around', height: '200px'}}>
      <img alt="progress" src={`/icons/progress${id}.png`} style={{
        width: '190px',height: '34px'}} />
      <Middletitle>우린 얼마나 잘 맞을까?</Middletitle>
      <Minititle>둘 중 더 선호하는 것을 골라보세요!</Minititle>
      </Titlebox>
      
      <Balancebox>
      {next === 11 ? 
        <>
      
          <Link
            className="selectButton"
            to={`/balance/loading`}
            onClick={() => BalanceData(1)}
          >
            {data.optionFirst}
          </Link>
          <Link
            className="selectButton"
            to={`/balance/loading`}
            onClick={() => BalanceData(2)}
          >
            <div>{data.optionTwo}</div>
          </Link>
        </> : 
         <>
        
         <Link
           className="selectButton"
           to={`/balance/${next}`}
           onClick={() => BalanceData(1)}
         >
           <div>{data.optionFirst}</div>
         </Link>
         <Link
           className="selectButton"
           to={`/balance/${next}`}
           onClick={() => BalanceData(2)}
         >
           <div>{data.optionTwo}</div>
         </Link>
       </>
       
}
      </Balancebox>

    </Mainview>
  );
}
