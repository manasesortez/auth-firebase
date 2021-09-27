import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';
import classes from "../AvailableMeals.module.css";
import React from 'react'
import '../../../../Products/firebase/LinksStyle';
import LinksForm from "../../../../Products/firebase/LinksForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`; //content literal formatting

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });


  }
  return (
      <div className="col-md-17 p-2">
            <div className="card mb-1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <h4>{props.name}</h4>
                  <div>
                    <i className="material-icons text-danger"
                        //onClick={() => onDeleteLink(link.id)}
                    >close</i>
                    <i className="material-icons"
                        //onClick={() => setCurrentId(link.id)}
                    >create</i>
                  </div>
                </div>
                <p>{props.description}</p>
                <p>${props.price} dlrs</p>
              </div>
            </div>
      </div>
  );
};

export default MealItem;
