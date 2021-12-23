import React from 'react';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import { setCategory } from "../redux/action/filters";
import {fetchPizzas} from "../redux/action/pizzas"
import {array} from "prop-types";

const categoryNames = ['Мясные', 'Вегатарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    {name:'популярности', type:'popular'},
    {name:'цене', type: 'price'},
    {name:'алфавиту', type: 'alphabet'}
]


function Home() {

    const dispatch = useDispatch();
    const items  = useSelector(({pizzas}) => pizzas.items);
    const isLoaded  = useSelector(({pizzas}) => pizzas.isLoaded);

    React.useEffect(() => {
            dispatch(fetchPizzas())
    }, []);



const onSelectCategory =  React.useCallback((index) => {
    dispatch(setCategory(index))
}, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup items={sortItems}/>

            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">


                {isLoaded
                        ? items && items.map((item) => ( <PizzaBlock key={item.id}  isLoading={true} {...item} />))
                        : Array(12).fill(<PizzaLoadingBlock />)}




            </div>
        </div>
    );
}

export default Home;