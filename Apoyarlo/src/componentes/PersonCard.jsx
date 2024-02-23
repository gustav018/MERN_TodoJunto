import PropTypes from 'prop-types';

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;

  return (
    <div>
      <h2>
        {firstName}, {lastName}
      </h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
    </div>
  );
};

PersonCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
};

export default PersonCard;
