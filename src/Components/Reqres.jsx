import axios from "axios";
import { useEffect, useState } from "react";

function Reqres() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <input />
      {data.map((item) => (
        <div>
          {item.id} {item.avatar}-{item.first_name}
        </div>
      ))}
    </div>
  );
}
export default Reqres;
