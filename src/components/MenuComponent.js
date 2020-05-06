import React from 'react';
import {Component} from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

class Menu extends Component{
	constructor(props)
	{
		super(props);
		this.state={
			dishes:this.props.dishes,
			
			
		};
	}
	render(){
		const menu=this.state.dishes.map((dish)=>{
               return(
               	 <div key={dish.id} className="col-12 col-md-5 m-1">
               	   <Card onClick={() => this.props.onClick(dish.id) }>
                  
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                     <CardImgOverlay><b>{dish.name}</b></CardImgOverlay>
                
                    </Card>
               	 </div>
               	);
               }
			);

		return(
			<div className="container">
			    <div className="row">
			     {menu}
			    </div>
                 
			</div>
			);
	}
		
}
export default Menu;