import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbcode } from "../../firebase/firebase-config-codeverify";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const usersCollectionRef = collection(dbcode, "datingusers");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const sliderStyles = {
    heigth: "100%",
    position: "relative",
  };

  

  return (
    <div className="main">
      <div className="main__container">
        {/* {users.map((data) => (
          <div className="user__card">
            <img
              src={data.picture}
              alt={data.firstName + " " + data.lastName}
              className="user__image"
            />
            <h1 className="user__name">
              {data.firstName} {data.lastName}
            </h1>

            <div className="interests">
              <p className="interest">{data.interest1}</p>
              <p className="interest">{data.interest2}</p>
              <p className="interest">{data.interest3}</p>
            </div>
          </div>
        ))} */}

        <div className="user__card" style={sliderStyles}>
          {users.length !== 0 ? (
            <div
              className="user__info"
              style={{
                backgroundImage: `url(${users[currentIndex].picture})`,
              }}
            ></div>
          ) : (
            <div className="user__loading">Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
