const Fooditems = () => {
    let fooditems = ["Dal", "Green Salad", "Milk", "Green Vegetables", "Roti", "Ghee"];

    return (
        <ul className="list-group">
            {
                fooditems.map((item) => (
                    <li key={item} className="list-group-item">{item}</li>
                ))
            }

        </ul>
    );
};

export default Fooditems;