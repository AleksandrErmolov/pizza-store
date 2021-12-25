import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import { setCategory, setSortBy } from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas"
import { addPizzaToCart } from "../redux/action/cart"
import {array} from "prop-types";

const categoryNames = ['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name:'популярности', type:'popular', order:'desc'},
    {name:'цене', type: 'price', order:'desc'},
    {name:'алфавиту', type: 'name', order:'asc'},
]


function Home() {

    const dispatch = useDispatch();
    const items  = useSelector(({pizzas}) => pizzas.items);
    const cartItems  = useSelector((cart) => cart.cart.items);
    const isLoaded  = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy}  = useSelector(({filters}) => filters);

    console.log()


    React.useEffect(() => {
            dispatch(fetchPizzas(sortBy,category))
    }, [sortBy, category]);



const onSelectCategory =  React.useCallback((index) => {
    dispatch(setCategory(index))
}, []);



    const onSelectSortType =  React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);


    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: "ADD_PIZZA_CART",
            payload: obj,
        })
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


                {isLoaded
                        ? items && items.map((item) => (
                            <PizzaBlock
                                onClickAddPizza={handleAddPizzaToCart}
                                key={item.id}
                                isLoading={true}
                                addedCount={cartItems[item.id] && cartItems[item.id].length}
                                {...item} />
                ))
                        : Array(12)
                        .fill(0)
                        .map((_,index) => <PizzaLoadingBlock key={index}/>)}




            </div>
        </div>
    );
}

export default Home;