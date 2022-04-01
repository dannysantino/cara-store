import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

import ShopItem from '../components/ShopItem'
import Pagination from '../components/Pagination'

import '../stylesheets/Shop.css'

const Shop = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({});
    const [products, setProducts] = useState([]);
    // sort all products
    const [sortAProducts, setSortAProducts] = useState([]);
    // sort filtered products
    const [sortFProducts, setSortFProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const checkFilters = Object.keys(filters).length;
    const fProdLength = filteredProducts.length;

    const handleFilters = e => {
        const value = e.target.value;
        if (value === 'clear' && checkFilters > 1) {
            const { [e.target.name]: _, ...rest } = filters;
            setFilters(rest);
        } else if (value === 'clear' && checkFilters === 1) {
            setFilters({});
            setSortFProducts([]);
            setFilteredProducts([]);
        } else if (value !== 'clear') {
            setFilters({
                ...filters,
                [e.target.name]: value
            });
        }
    }

    const handleSort = e => {
        const sortItems = (items, sort) => {
            sort === 'newest'
                ? items.sort((a, b) => a.createdAt - b.createdAt)
                : sort === 'price-up'
                    ? items.sort((a, b) => a.price - b.price)
                    : items.sort((a, b) => b.price - a.price)
            return items;
        }
        if (e.target.value === 'clear') {
            fProdLength
                ? setSortFProducts([])
                : checkFilters === 0 && setSortAProducts([])
        } else {
            fProdLength
                ? setSortFProducts(
                    sortItems([...filteredProducts], e.target.value)
                )
                : checkFilters === 0 && setSortAProducts(
                    sortItems([...products], e.target.value)
                )
        }
    }

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axios.get(
                    searchParams.has('category')
                        ? `http://localhost:5000/api/products?category=${searchParams.get('category')}`
                        : 'http://localhost:5000/api/products'
                );
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        }
        getProducts();
    }, [searchParams]);

    useEffect(() => {
        const filterProducts = products => products.filter(e => Object.entries(filters).every(([k, v]) => e[k].includes(v)));

        checkFilters && sortAProducts.length
            ? setFilteredProducts(filterProducts(sortAProducts))
            : checkFilters && sortFProducts.length
                ? setFilteredProducts(filterProducts(sortFProducts))
                : checkFilters && setFilteredProducts(filterProducts(products));
    }, [filters, sortAProducts, sortFProducts, checkFilters, products]);

    return (
        <>
            <section id='shop-header' className='page-header'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='wrapper text-center'>
                                <h2>#stayhome</h2>
                                <p>Browse our extensive catalog of hottest fashion trends!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='shop' className='pt-3 pb-5 my-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col'>
                            <div className='heading text-center'>
                                <h2>All Products</h2>
                                <hr />
                            </div>
                        </div>
                    </div>

                    <div className='row category px-4 px-lg-5 pt-4'>
                        <div className='col-12 col-md-6 col-lg-5 col-xl-4'>
                            <div className='filter'>
                                <h4>Filter Items</h4>
                                <select name='color' className='form-select color' onChange={handleFilters}>
                                    <option value='clear' defaultChecked>Color</option>
                                    <option value='white'>White</option>
                                    <option value='black'>Black</option>
                                    <option value='red'>Red</option>
                                    <option value='yellow'>Yellow</option>
                                    <option value='green'>Green</option>
                                    <option value='blue'>Blue</option>
                                </select>

                                <select name='size' className='form-select size' onChange={handleFilters}>
                                    <option value='clear' defaultChecked>Size</option>
                                    <option value='XS'>XS</option>
                                    <option value='S'>S</option>
                                    <option value='M'>M</option>
                                    <option value='L'>L</option>
                                    <option value='XL'>XL</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0'>
                            <div className='sort'>
                                <h4>Sort Items</h4>
                                <select name='val' className='form-select val' onChange={handleSort}>
                                    <option value='clear'>None</option>
                                    <option value='newest'>Newest</option>
                                    <option value='price-up'>Price +</option>
                                    <option value='price-down'>Price -</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='products pt-5'>
                        <div className='row px-4 px-xl-5'>
                            {
                                sortFProducts.length && fProdLength
                                    ? sortFProducts.map(e => <ShopItem data={e} key={e._id} />)
                                    : sortAProducts.length && checkFilters === 0
                                        ? sortAProducts.map(e => <ShopItem data={e} key={e._id} />)
                                        : checkFilters && fProdLength
                                            ? filteredProducts.map(e => <ShopItem data={e} key={e._id} />)
                                            : checkFilters && fProdLength === 0
                                                ? <h3>
                                                    No items found for selected filter(s)
                                                    <br />
                                                    Clear all filters and try again...
                                                </h3>
                                                : products.map(e => <ShopItem data={e} key={e._id} />)
                            }
                        </div>
                    </div>
                </div>
            </section>

            <Pagination />
        </>
    )
}

export default Shop
