import React from 'react';

import {Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

	
function RenderDish({dish})
	{
		if( dish != null)
		{   return(

			<div className="row">
			<div className="col-12 col-md-5">
			<Card>
			  <CardImg width="100%" src={dish.image} alt={dish.name} />
			  <CardBody>
			  <CardTitle>{dish.name}</CardTitle>
			  <CardText>{dish.description}</CardText>
			  </CardBody>
			</Card>
			</div>
			
			<RenderComments  comments={dish.comments}/>
			
			</div>
			 );
		}
		else
		{
            return(
            <div></div>
            );
		}
	}
function RenderComments({comments})
	{   if(comments.length != 0){
		   const getcomments=comments.map((commentin)=>{
		   	return(
		   
		   	<div key={commentin.id}>
		   	<li>
		   	  {commentin.comment}
		   	  <br/>
		   	  <p>--{commentin.author},{new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(commentin.date)))}</p>
		   	  </li>
		   	</div>
		   	
		   	);
		   });
           return(
              
             <div className="col-12 col-md-5 ml-4">
             <h4>Comments</h4>
                <ul className="list-unstyled">
                {getcomments}
                </ul>
            
             </div>
           );
		   
     }
         else
         {
         	return(
         	<div></div>
         	);
         }
    }
	
const DishDetail = (props) =>
{
	return(
		<div className="container">
		<RenderDish dish={props.dish}/>
		</div>
		);
}
export default DishDetail;