import classes from "./LocationItem.module.css";
//import CartContext from "../../../store/cart-context";

const LocationItem = (props) => {
  //const price = `$${props.price.toFixed(2)}`;

  //const cartctx = useContext(CartContext);

//   const addToCartHandler = (amount) => {
//     console.log("Add called from mealitem");
//     const item = {
//       id: props.id,
//       name: props.name,
//       amount: amount,
//       price: props.price,
//     };

//     cartctx.addItem(item);
//   };

  return (
    <li className={classes.location}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.totalCapacity}>Total Slots: {props.totalAvailable}</div>
      </div>
      <div className={classes.checkAvilability}>
        <button>Check Avilability</button>
      </div>
      {/* <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div> */}
    </li>
  );
};

export default LocationItem;
