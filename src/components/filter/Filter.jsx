import './filter.scss';

import { useEffect } from 'react';

import { useQuery } from "react-query";
import { getAllCategories } from '../../services/shopItem';

import { useData } from '../../store/store';

const Filter = () => {

    const { isLoading, data } = useQuery('categories', getAllCategories);

    const filter = useData(state => state.filter);
    const setFilter = useData(state => state.setFilter);

    useEffect(() => {
        setFilter('all category');
        // eslint-disable-next-line
    }, []);

    const onSelectCategory = (e) => {
        setFilter((e.target.textContent).toLowerCase());
    }

    let buttons = null;
    if (!isLoading) {
        buttons = data.map((item, i) => {
            return <button
                key={i}
                onClick={onSelectCategory}
                disabled={filter === item}
            >
                {item}
            </button>
        });
    }

    return (
        <header className="header">
            <h1 className='h1'>FAKE STORE</h1>
            <div className="butons">
                <button onClick={onSelectCategory} disabled={filter === 'all category'}>
                    All category
                </button>
                {isLoading ? 'Loading' : buttons}
            </div>

        </header>

    );
}

export default Filter;