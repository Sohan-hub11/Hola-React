function Hello() {
    // return <h3>
    //     This one of the frontend framework.
    // </h3>
    let name = "Sohan Samanta";
    let age = 20;
    
    let fullname = () => {
        return 'Sohan';
    }
    return <p>
        {fullname()} is {age} years old!
    </p>
}


export default Hello;