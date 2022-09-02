import React from 'react';
import '../../index.css'
import './style.css'
import data from './data/categories'
import { Link } from "react-router-dom";
// @ts-ignore
import Button from '../Elements/Button.tsx'

function CategoriesPage(props:any){
    const CategoryCard = ({title, image}:{title:string, image:string}) => (
        <Link to="/all-products">
        <div className='category-card' onClick={()=> props.cardClicked(title)}>
            <h2>{title}</h2>
            <img src={image}></img>
        </div>
        </Link>
    );
    const section = data.map((category) => <CategoryCard {...category}/>);
    return(
        <>
        <h1 className="text-3xl font-bold underline">Product Categories</h1>
        <div className='category-section'>
            {section}
        </div>
        <Link to="/all-products">
            <Button 
                onClick={props.cardClicked("all-products")} 
                text="All Products"
            />
        </Link>
        </>
    )
}

export default CategoriesPage;