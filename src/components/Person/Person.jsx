import { FiDelete } from "react-icons/fi";
import './Person.css'

const Person = ({ id, profile_image, name, status, deleteItem }) => {

  return (

    <div className="item" id={id}>

      <img src={profile_image} alt={name} className="person-image"/>

      <div className="content">
        <h3 className="person-name">{name}</h3>
        <p className="person-status">{status}</p>
      </div>

      <button className="person-delete-btn" onClick={deleteItem}><FiDelete /></button>

    </div>

  )

}

export default Person