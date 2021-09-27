import React, { Component } from "react";
import ProductsDataService from "../../Services/products.service";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      name: "",
      price: 0,
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  saveProduct() {
    var data = {
      name: this.state.name,
      price: this.state.price
    };
    ProductsDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          price: response.data.price,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduct() {
    this.setState({
      id: null,
      name: "",
      price: 0,
      submitted: false
    });
  }

  render() {
    return (
      <div  className="submit-form mt-10">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProduct}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <button onClick={this.saveProduct} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
