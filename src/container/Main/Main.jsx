import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbcode } from "../../firebase/firebase-config-codeverify";

const Main = () => {
  const [users, setUsers] = useState([]);

  const codeCollectionsRef = collection(dbcode, "codeverify");

  useEffect(() => {
    // Get firebase data
    const getCode = async () => {
      const data = await getDocs(codeCollectionsRef);
      setUsers(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getCode();
  }, []);

  console.log(users);

  return (
    <div className="main">
      <div className="main__container">hi</div>
    </div>
  );
};

export default Main;
