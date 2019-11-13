import React, { useState } from "react";
import { Form, Radio } from "semantic-ui-react";

const ProfileContainer = props => {
  const [symptom, setSymptom] = useState();
  const [answer, setAnswer] = useState();
  const [medsTaken, setMedsTaken] = useState();
  const [actions, setActions] = useState();

  const handleChangeSymptom = e => {
    e.preventDefault();
    setSymptom(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  //   getSymptom = async() => {
  //     try {
  //         const responseGetSymptom = await fetch(BACKEND URL, {
  //             method: 'GET',
  //             credentials: 'include',
  //             headers: {
  //                 'enctype': 'multipart/form-data'
  //             }
  //         })
  //         const symptomResponse = await responseGetSymptom.json();

  //         if(symptomResponse.status.code !== 200) {
  //             throw Error('404 from server')
  //         }
  //         this.setState({
  //             symptom: symptomResponse.data
  //         })
  //     } catch(err) {
  //         console.log(err, 'error from getSymptom')
  //         return err
  //     }
  //   }

  //   render() {
  return (
    <div>
      <h3>
        Add new symptom
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={symptom}
            name="symptom"
            placeholder="Symptom"
            onChange={handleChangeSymptom}
          />
          <button>Submit</button>
        </form>
      </h3>
      <h2>Are you experiencing {symptom} today?</h2>
      <label>
        <Form.Field
          control={Radio}
          label="Yes"
          checked={answer === "Yes"}
          onClick={() => setAnswer("Yes")}
        />
        <Form.Field
          control={Radio}
          label="No"
          checked={answer === "No"}
          onClick={() => setAnswer("No")}
        />
      </label>
      {/* <h3>Meds taken: {this.state.medsTaken}</h3>
      <form>
        <input
          type="text"
          name="medsTaken"
          placeholder="Meds Taken"
          onChange={this.handleChange}
        />
      </form>
      <h3>Actions: {this.state.actions}</h3>
      <form>
        <input
          type="text"
          name="actions"
          placeholder="Actions"
          onChange={this.handleChange}
        />
      </form> */}
    </div>
  );
};
// }

export default ProfileContainer;
