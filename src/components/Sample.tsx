import React, { useState } from 'react';
import axios from 'axios';

// 型定義
type Data = {
  user_id: string;
  user_name: string;
};

// Sampleコンポーネント定義
const Sample: React.FC = () => {
  const url = 'http://localhost:3000/users'; // URL
  const [datas, setDatas] = useState([]); // レスポンスデータ

  // GET APIを実行する関数
  const getUserData = () => {
    axios
      .get(url)
      .then((res) => {
        setDatas(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <button onClick={getUserData}>GET API実行</button>
      <div>
        {datas.map((data: Data) => (
          <div key={data.user_id}>
            {data.user_id} : {data.user_name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sample;
