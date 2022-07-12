import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../redux/actions/productActions'
import { useTitle } from '../utils/pageTitle'
import Loader from '../components/Loader'
import ShopItem from '../components/ShopItem'
import Pagination from '../components/Pagination'

import '../stylesheets/Shop.css'

const Shop = () => {
    useTitle('Shop Cara');

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { fetching, error, products } = useSelector(state => state.products);

    const [filters, setFilters] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    // sort all products
    const [sortAProducts, setSortAProducts] = useState([]);
    // sort filtered products
    const [sortFProducts, setSortFProducts] = useState([]);

    const checkFilters = Object.keys(filters).length;
    const fProdLength = filteredProducts.length;
    const renderItems = d => <ShopItem data={d} key={d._id} />;

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
        let url = searchParams.has('category')
            ? `/products?category=${searchParams.get('category')}`
            : '/products';
        getProducts(dispatch, url);
    }, [searchParams, dispatch]);

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
                                <h2>#stayfrosty</h2>
                                <p>Browse our extensive catalog of the coolest fashion trends!</p>
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
                                <h2>
                                    {
                                        searchParams.has('category')
                                            ? searchParams.get('category')
                                            : 'All Products'
                                    }
                                </h2>
                                <hr />
                            </div>
                        </div>
                    </div>

                    <div className='row selections px-4 px-lg-5 pt-4'>
                        <div className='col-md-6 col-lg-5 col-xl-4'>
                            <div className='filter'>
                                <h4>Filter</h4>
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
                        <div className='col-md-6 col-lg-4 col-xl-3 mt-3 mt-md-0'>
                            <div className='sort'>
                                <h4>Sort</h4>
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
                                fetching
                                    ? <Loader />
                                    : error
                                        ? <h4 className='text-danger'>
                                            An error occurred. Please reload
                                            <br />
                                            the page or check your internet connection...
                                        </h4>
                                        : sortFProducts.length && fProdLength
                                            ? sortFProducts.map(e => renderItems(e))
                                            : sortAProducts.length && checkFilters === 0
                                                ? sortAProducts.map(e => renderItems(e))
                                                : checkFilters && fProdLength
                                                    ? filteredProducts.map(e => renderItems(e))
                                                    : checkFilters && fProdLength === 0
                                                        ? <h4>
                                                            No items found for selected filter(s)
                                                            <br />
                                                            Clear all filters and try again...
                                                        </h4>
                                                        : products.map(e => renderItems(e))
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
