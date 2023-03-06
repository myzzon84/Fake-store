

export const getAllProducts = async () => {
    let response = await fetch(`https://fakestoreapi.com/products`);
    return response.json();
}

export const getAllCategories = async () => {
    let response = await fetch('https://fakestoreapi.com/products/categories');
    return response.json();
}

export const getCategory = async (category) => {
    let res = await fetch(`'https://fakestoreapi.com/products/category/${category}`);
    return res.json();
}