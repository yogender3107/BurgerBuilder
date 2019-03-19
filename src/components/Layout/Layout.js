import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:true
    }
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler= () =>{
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}});
    }
    render(){
        return (
            <Aux>
                <ToolBar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                {/* <div>ToolBar, SideDrawer, BackDrop</div> */}
        <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );        
    }
}

export default Layout;