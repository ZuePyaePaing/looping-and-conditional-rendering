const Lists = ({ name, live, email }) => {
  return (
    <div className="list-box">
      <p>{name}</p>
      <p>{live}</p>
      <p>{email}</p>
    </div>
  );
};

export default Lists;
