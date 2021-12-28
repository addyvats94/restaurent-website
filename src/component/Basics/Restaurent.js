import React, {useState} from 'react';
import "./style.css";
import Menu from './menuApi';
import MenuCard from './menuCard';
import NavBar from './NavBar';

const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu)

  const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
  })),
  "All"
]

  const [menuList, setMenuList] = useState(uniqueList);
  console.log(uniqueList);

  const filterItem= (category) => {
    if(category === "All") {
      setmenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList);
  }
    return (
        <>
          <NavBar filterItem={filterItem} menuList={menuList}/>
          <MenuCard menuData={menuData}/>

        </>
        
    )
}

export default Restaurent
