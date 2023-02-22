import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopy,
} from "@fortawesome/free-solid-svg-icons";

function CopyIconWithLabel() {
  const [labelText, setLabelText] = useState('Copy Text');

  const handleClick = () => {
    navigator.clipboard.writeText('Hello World')
      .then(() => {
        setLabelText('Copied!');
        setTimeout(() => {
          setLabelText('Copy Text');
        }, 1000);
      })
      .catch(() => setLabelText('Copy Failed :('));
  };

  return (
    <div onClick={handleClick} className="copyb">
              <FontAwesomeIcon icon={faCopy} size="2x" color="black"  width={20} height={15}   />
      <span style={{ marginLeft: '0.5rem' }}>
        {labelText}
      </span>
    </div>
  );
}

export default CopyIconWithLabel;