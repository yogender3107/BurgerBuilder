import React,{Component} from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuidControls from '../components/Burger/BuildControls/buildControls';
import Modal from '../components/UI/Modal/Model';
import OrderSummary from '../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.5,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{
    state ={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable: false,
        purchasing: false,
    }

    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler=()=>{
        alert('You Continue')
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
                    .map(igKey=>{
                        return ingredients[igKey]
                    })
                    .reduce((sum,el)=>{
                        return sum+el;
                    },0);
        this.setState({purchasable:sum>0?true:false})
    }

    addIngredientHandler = (type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type]=updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice:newPrice, ingredients:updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    render(){
        const disableInfo = {
            ...this.state.ingredients
        };
        console.log(disableInfo)
        for(let key in disableInfo) {
            disableInfo[key] =disableInfo[key]<=0
        }
        console.log(disableInfo)
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice.toFixed(2)}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuidControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemove={this.removeIngredientHandler} 
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;