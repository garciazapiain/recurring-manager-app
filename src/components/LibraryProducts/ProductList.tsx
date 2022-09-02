import React, { useState } from 'react';
import data from './data/products'
// @ts-ignore
import Product from './Product.tsx'
import { useForm } from "react-hook-form";

function ProductList(props: any) {
    const { register, handleSubmit } = useForm();
    const [productModal, setProductModal] = useState(false)
    const [createProductForm, setCreateProductForm] = useState(false)
    const [dataFilter, setDataFilter] = useState([])
    const [rows, setRows] = useState([])
    const [dataRows, setDataRows] = useState(data)
    let productDataSelection = props.productDataSelection.toLowerCase()
    function productAdded() {
        alert('product added')
    }
    function createProduct() {
        setCreateProductForm(true)
    }
    const createProductSubmit = (newProductData: any) => {
        setDataRows(prev => [...prev, newProductData])
    }

    function productFocus(title: any) {
        setProductModal(title)
    }
    const ProductRow = ({ title, price, category }: { title: string, price: number, category: string }) => (
        <tr onClick={() => productFocus(title)}>
            <th>{title}</th>
            <th>${price}</th>
            <th>{category}</th>
            <th><button onClick={productAdded}>Add</button></th>
        </tr>
    );
    // productDataSelection == 'all-products' ? dataFilter = data : dataFilter = data.filter(item => item.category == productDataSelection)
    // let rows = dataFilter.map((rowData) => <ProductRow {...rowData} />);
    React.useEffect(()=>{
        // console.log(productDataSelection)
        productDataSelection == 'all-products' ? setDataFilter(dataRows) : setDataFilter(dataRows.filter(item => item.category == productDataSelection))
    },[dataRows])
    React.useEffect(()=>{
        setRows(dataFilter.map((row) => <ProductRow {...row} />));
    },[dataFilter])
    return (
        <div>
            <h2>Library of Products</h2>
            <table>
                <thead>
                    <tr>
                        <th>Product name</th>
                        <th>Approximate Price</th>
                        <th>Category</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <button onClick={createProduct}>Create new product</button>
            {createProductForm &&
                <div className="newProductForm">
                    <form onSubmit={handleSubmit(createProductSubmit)}>
                        <input placeholder="title" {...register("title")} />
                        <input placeholder="aproximate price" {...register("price")} />
                        <input placeholder="price" {...register("category")} />
                        <input type="submit" />
                    </form>
                </div>
            }
            {productModal &&
                <div>
                    <Product
                        productModal={productModal}
                    />
                </div>
            }
        </div>
    )
}

export default ProductList;