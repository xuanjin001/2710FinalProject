import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Product from '../../containers/Product';

class ProductList extends PureComponent {
    static propTypes = {
        products: PropTypes.array,
        fetchProducts: PropTypes.func
    }

    componentDidMount() {
        axios({
            url: '/products',
            method: 'get'
        }).then(results => {
            this.props.fetchProducts(results.data)
        })
    }

    render() {
        const { products } = this.props
        return (
            <div>
                <h3>Products</h3>
                <ul className="product-list">
                  {products.map(product => (
                      <li key={product.id} className="product-list__item">
                        <Product {...product} />
                      </li>
                  ))}
                </ul>
            </div>
        );
    }
}

export default ProductList;
