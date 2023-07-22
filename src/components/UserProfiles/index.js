import "./index.css";
const UserProfiles = (props) => {
  const { userInfo, onDeleteUser } = props;
  const { imageUrl, name, role, id } = userInfo;

  const onDelete = () => {
    onDeleteUser(id);
  };

  return (
    <li className="each_item_container">
      <img src={imageUrl} alt="logo" className="logo" />
      <div className="person_details">
        <h1 className="name">{name}</h1>
        <p>{role}</p>
      </div>
      <button className="button_delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  );
};
export default UserProfiles;
