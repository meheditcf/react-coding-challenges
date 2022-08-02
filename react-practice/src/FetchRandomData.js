import React, { useEffect, useState } from "react";
import axios from 'axios';


export default function FetchRandomData() {
  const [data, setData] = useState(null);
  useEffect(()=> {
    axios.get('https://randomuser.me/api').then(response => console.log(response.data.results)).then(error => console.log(error));
  }, [])

  return <div>Hi</div>;
}
