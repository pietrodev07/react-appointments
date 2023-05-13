import {useState} from "react";
import Person from "../Person/Person";
import './Main.css'
import data from "../../data/data";

const Main = () => {

  const [people, setPeople] = useState(data);

  const deleteAllItems = () => {
    setPeople([]);
  }

  const reloadAllItems = () => {
    setPeople(data);
  }

  const deleteItem = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  }

  return (

    <main className="main">

      <div className="card">

        {people && people.map(person => {
          const { id, profile_image, name, status } = person;
          return <Person key={id} id={id} profile_image={profile_image} name={name} status={status} deleteItem={() => deleteItem(id)} />
        })}

        {!people.length && <h3>Click on reload button for seeing the appointments</h3>}

      </div>

      <div className="action-buttons">
        <button className="btn delete-btn" onClick={deleteAllItems}>Delete</button>
        <button className="btn reload-btn" onClick={reloadAllItems}>Reload</button>
      </div>

    </main>

  )

}

export default Main