function Clothes({anyPropName}) {
    return(
        <div className="products">
            {anyPropName.map((item => {
                const {id, name, searchTerm, price, image} = item;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} width="400px" height="500px" alt="clothes"/>
                        <div className="product-info">
                            <h3>{name}</h3>
                            <h4>$ {price}</h4>   
                        </div>
                    </div>
                )
            }))}
        </div>
    )
}
export default Clothes;