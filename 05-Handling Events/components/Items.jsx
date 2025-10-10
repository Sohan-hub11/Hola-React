import styles from "./Item.module.css";

const Items = ({ fooditems }) => {

    const handleBuyButtonClicked = ( fooditems ) => {
        console.log(`${ fooditems } being brought`)
    }

    return (
        <li className={ `${styles["items-info"]} list-group-item`}>
            <span className={styles["items-span"]}> {fooditems} </span>
            <button className={`${styles.button} btn btn-info`}
            onClick={() => handleBuyButtonClicked(fooditems)}
            > Buy </button>
        </li>
    );
};

export default Items;