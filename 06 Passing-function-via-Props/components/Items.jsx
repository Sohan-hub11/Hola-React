import styles from "./Item.module.css";

const Items = ({ fooditems, handleBuyButton }) => {

    // const handleBuyButtonClicked = ( event ) => {
    //     console.log(event);
    //     console.log(`${ fooditems } being brought`)
    // }

    return (
        <li className={ `${styles["items-info"]} list-group-item`}>
            <span className={styles["items-span"]}> {fooditems} </span>
            <button className={`${styles["button"]} btn btn-info`}
            onClick={ handleBuyButton }
            > 
            Buy </button>
        </li>
    );
};

export default Items;