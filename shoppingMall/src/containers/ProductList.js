import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts, fetchProducts } from '../reducers/products';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props)
    }
}

const mapDispatchToProps = {
    fetchProducts: fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
