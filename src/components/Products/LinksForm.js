import React, { useState, useEffect } from "react";
import { db } from "./db/firebase";

const LinksForm = (props) => {
  const initialStateValues = {
    price: "",
    name: "",
    description: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };

  const getLinkById = async (id) => {
    const doc = await db.collection("products").doc(id).get();
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === "") {
      setValues({ ...initialStateValues });
    } else {
      getLinkById(props.currentId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId]);

  return (
    <form onSubmit={handleSubmit} className="card card-body border-primary">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">monetization_on</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Precio"
          value={values.price}
          name="price"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">description</i>
        </div>
        <input
          type="text"
          value={values.name}
          name="name"
          placeholder="Nombre"
          className="form-control"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <textarea
    rows="3"
    className="form-control"
    placeholder="Write a Description"
    name="description"
    value={values.description}
    onChange={handleInputChange}
    />
      </div>

      <button className="btn btn-primary btn-block">
        {props.currentId === "" ? "Save" : "Update"}
      </button>
    </form>
  );
};

export default LinksForm;
