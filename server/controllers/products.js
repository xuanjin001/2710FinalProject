const conn = require('../connection')



exports.getProducts = (req, res) => {
    const query = 'select * from products'
    conn.query(query, (error, results) => {
        if (error) throw error;
     
        res.json(results)
    });
}

exports.getProductById = (req, res) => {
    const id = Number(req.params.id)
    const query = 'select * from products where id='+id

    conn.query(query, (error, results) => {
        if (error) {
            res.status(500).json({'message': 'internal server error'})
            return;
        }

        if (results.length === 0) {
            res.status(404).json({
                message: 'product not found'
            })
    
            return;
        };
     
        res.json(results[0])
    })
}

exports.postProduct = (req, res) => {
    const body = req.body

    console.log(body)
    const query = 'insert into products values('
        +body.id
        +',"'+body.name
        +'",'+body.price
        +',"'+body.currency
        +'","'+body.image+'")'

    conn.query(query, (error, results) => {
        if (error) {
            console.log(error)
            res.status(500).json({'message': 'internal server error'})
            return;
        }
        res.status(200).json(results)
    })

}

exports.deleteProductById = (req, res) => {
    const id = Number(req.params.id)
    const query = 'delete from products where id='+id
    conn.query(query, (error, results) => {
        if (error) {
            res.status(500)
            return;
        }

        res.status(200).json(results)
    })
}