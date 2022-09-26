import axios from 'axios';
import { useEffect, useState } from 'react';
import Detail from '../Components/PostDetail';

const saves = () => {
  const [data, setdata] = useState('');
  const id = '';
  const url = `http://ec2-3-34-181-86.ap-northeast-2.compute.amazonaws.com:8080/board`;
  useEffect( () => {
    axios(url, {
        method: 'get',
        // withCredentials: true,
        // cors: {
        //     origin: '*',
        //   }
      }).then((res) => setdata(res.data));
  },[])
  
  return data;
};

export default saves