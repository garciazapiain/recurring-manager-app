import React from 'react';
import '../../index.css'
import './style.css'
import data from './data/categories'
import { Link } from "react-router-dom";
// @ts-ignore
import Button from '../Elements/Button.tsx'

function CategoriesPage(props: any) {
    const CategoryCard = ({ title, image }: { title: string, image: string }) => (
        <>
            <Link to="/all-products">
                <div className='category-banner' onClick={() => props.cardClicked(title)}>
                    <h2 className="p-5 text-5xl">{title}</h2>
                </div>
            </Link>
        </>
    );
    const section = data.map((category) => <CategoryCard {...category} />);
    React.useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const footer = document.querySelector('.buttonFooterCategoriesPage')
        const scrollTop = window.scrollY
        scrollTop >=20 ? footer.classList.add('is-sticky') : footer.classList.remove('is-sticky')
    }
    return (
        <>
            <h1 className="m-5 text-4xl">Categories</h1>
            <h2 className='m-5 text-lg'>See products by categories</h2>
            <div className='category-section'>
                {section}
            </div>
            <Link to="/all-products">
                <div className="buttonFooterGeneric">
                    <Button
                        onClick={props.cardClicked("all-products")}
                        text="Select All"
                    />
                </div>
            </Link>
        </>
    )
}

export default CategoriesPage;