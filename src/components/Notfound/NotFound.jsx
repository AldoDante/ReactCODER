import { Card } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { Link } from "react-router-dom"

/* A component that is shown when the item id in the url doesnt match any on the database */
const NotFound = () => {
    return ( 
        <>
        <Card className="text-center mx-auto" style={{ width: '30rem' }}>
            <CardHeader>OUCH</CardHeader>
            EL PRODUCTO NO EXISTE
             
             {/* A button that redirects to the home page */}
            <Link to="/">
                <button className="btn btn-outline-dark">VOLVER</button>
            </Link> 
            
        </Card>
        </>
    )
}

export default NotFound