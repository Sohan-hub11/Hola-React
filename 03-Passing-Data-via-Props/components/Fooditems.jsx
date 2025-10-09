import Items from "./Items";

const Fooditems = ( { food }) => {

    return (
        <ul className="list-group">
            {
                food.map((item) => (
                  <Items key = {item} fooditems = {item}></Items>
                ))
            }

        </ul>
    );
};

export default Fooditems;
