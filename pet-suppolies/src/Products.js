//use bootstrap?

function Products(){

    return (
        <div>
            <h2>Our Products: </h2>
            <div>
                <h4>Cats: </h4>
            <ul className="list-group">
                <li className="list-group-item">Food</li>
                <li className="list-group-item">Litter Boxes</li>
                <li className="list-group-item">Litter</li>
                <li className="list-group-item">Toys</li>
                <li className="list-group-item">Water Bowls</li>
            </ul>
            </div>
            <div>
                <h4>Dogs: </h4>
            <ul className="list-group">
                <li className="list-group-item">Food</li>
                <li className="list-group-item">Leashes</li>
                <li className="list-group-item">Toys</li>
                <li className="list-group-item">Beds</li>
            </ul>
            </div>
        </div>

    );
}

export default Products;