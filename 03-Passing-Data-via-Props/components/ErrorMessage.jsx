const ErrorMessage = () => {
    
    let fooditems = ["Dal", "Green Salad", "Milk", "Green Vegetables", "Roti", "Ghee"];

    return (
        fooditems.length === 0 && <h4>I am Hungry</h4>
    );
}