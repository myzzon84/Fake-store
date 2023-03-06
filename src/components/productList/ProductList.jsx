import './productList.scss';

import { useQuery } from "react-query";
import { getAllProducts } from '../../services/shopItem';

import { useData } from '../../store/store';
import ModalInfo from '../modalInfo/ModalInfo';

const ProductList = () => {

    const { isLoading, data, error } = useQuery('produtsList', getAllProducts);

    const {filter, classNames, setClassNames, modalItem, setModalItem } = useData();

    const onShowModal = (e) => {
        let temp = data.filter((item) => {
            return item.id === Number(e.target.getAttribute('id'));
        });
        setModalItem(temp);
        setClassNames('modalInfo');
    }

    const renderItems = (arr) => {
        return arr.map((item) => {
            return (
                <li className='cardItem' key={item.id}>
                    <h2>
                        {item.title}
                    </h2>
                    <img src={item.image} alt={item.title} />
                    <button className='readMore' id={item.id} onClick={onShowModal}>
                        Read more
                    </button>
                </li>
            );
        })
    }

    let productsList;

    if (!isLoading && !error) {
        if (filter === 'all category') {
            productsList = renderItems(data);
        } else {
            let filteredData = data.filter((item) => {
                return item.category === filter;
            });
            productsList = renderItems(filteredData);
        }
    }

    return (
        <main className='productListWrapper'>
            <ul className='listItem'>
                {productsList}
            </ul>
            <div className={classNames}>
                {<ModalInfo card={modalItem}/>}
            </div>
        </main>
    );
}

export default ProductList;