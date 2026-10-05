export default function ProductsCard({name, price,description}) {
    return(
        <div className="productscard">
        <h2>{name} </h2>
            <p>{price} </p>
            <p>{description} </p>
        </div>
    )
}