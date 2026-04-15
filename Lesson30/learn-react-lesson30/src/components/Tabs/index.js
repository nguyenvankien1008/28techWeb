import { useEffect, useState } from "react";
import "./Tabs.scss";

function Tabs() {

    const [data, setData] = useState([]);
    const [tabActive, setTabActive] = useState("products");

    useEffect(() => {
        fetch(`https://dummyjson.com/${tabActive}`)
          .then(res => res.json())
          .then(data => {
            setData(data[tabActive]);
          })
    }, [tabActive]);

    const handleChangTab = (e) => {
      setTabActive(e);
    }

    // console.log(data);
    

    return (
        <>
            <div className="tabs">
                <div className="tabs__item" onClick={() => handleChangTab("products")}>
                  Products
                </div>
                <div className="tabs__item" onClick={() => handleChangTab("users")}>
                  Users
                </div>
                <div className="tabs__item" onClick={() => handleChangTab("posts")}>
                  Posts
                </div>
            </div>

            <div className="tabs__content">
              <ul>
                {data.map(item => (
                  <li key={item.id}>
                    {item.title || `${item.firstName} ${item.lastName}`}
                  </li>
                ))} 
              </ul>   
            </div>
        </>
    )
}

export default Tabs;