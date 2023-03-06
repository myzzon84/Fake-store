import {create} from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useData = create(set => ({
    filter: null,
    setFilter: (filter) => {
        set(() => {
            return {filter: filter}
        })
    },
    data: [],
    setData: (arr) => {
        set(() => {
            return {data: arr}
        })
    },
    classNames: 'modalInfo displayNone',
    setClassNames: (str) => {
        set(() => {
            return {classNames: str};
        })
    },
    modalItem: [{title:'', price:'', image:'', description:''}],
    setModalItem: (obj) => {
        set(() => {
            return {modalItem: obj};
        })
    }

}))

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useData);
  }