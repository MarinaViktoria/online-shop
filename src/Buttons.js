function Buttons({anyPropNameTwo}) {
    const filteredClothes = searchTerm => {
        
        const filteredResult = [];
        data.forEach(item => {
            item.searchTerm.forEach(term => {
                if ( term === searchTerm) {
                    filteredResult.push(item);
                    setClothes(filteredResult);
                }
            })
        })
    }

    return(
        <div className="cont">
            <button className="change" onClick={() => setClothes(data)}>All</button>
            <button className="change" onClick={() => anyPropNameTwo("dress")}>Top Seller</button>
            <button className="change" onClick={() => anyPropNameTwo("dress")}>Dresses</button>
            <button className="change" onClick={() => anyPropNameTwo("pants")}>Pants</button>
            <button className="change" onClick={() => anyPropNameTwo("skirt")}>Skirts</button>
            <button className="change" onClick={() => anyPropNameTwo("shoes")}>Shoes</button>
            <button className="change" onClick={() => anyPropNameTwo("shirt")}>Shirts</button>
        </div>
    )
}
export default Buttons;