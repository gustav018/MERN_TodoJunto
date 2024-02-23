import { useState } from "react";
import PropTypes from 'prop-types';

const PersonCard = ({ firstName, lastName, age: inicio, hairColor }) => {
  const [age, setAge] = useState(inicio);

  const subirContador = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <h2>
        {firstName}, {lastName}
      </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={subirContador}>
        Birthday Button {lastName} {firstName}
      </button>
    </div>
  );
};

PersonCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hairColor: PropTypes.string.isRequired,
};

export default PersonCard;
