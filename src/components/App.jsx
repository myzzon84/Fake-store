import './app.scss';

import Filter from './filter/Filter';
import ProductList from './productList/ProductList';

const App = () => {
    return (
        <div className='appWrapper'>
            <Filter />
            <ProductList />
        </div>
    );
}

export default App;