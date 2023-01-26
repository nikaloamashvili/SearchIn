import React, { useState } from "react";
// import "./Modal.css";

export default function BasicModal(props) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (typeof window !== "undefined") {

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }}

  if(props==false){
    toggleModal();
  }

  return (
    <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello New User</h2>
            <p>
            Introducing "search in", the ultimate one-stop-shop for all your online searching needs.
            Say goodbye to endlessly hopping from site to site, trying to find what you're looking for.
            With "search in",
            you can add your favorite search engines to our platform and search them all with just one simple click of a button.
            Upgrade your searching game and give "search in" a try today!
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}