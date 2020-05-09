import React from 'react';
import {Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
	
function RenderDish({dish})
	{
		if( dish != null)
		{   return(

			
			<div className="col-12 col-md-5">
			<Card>
			  <CardImg width="100%" src={dish.image} alt={dish.name} />
			  <CardBody>
			  <CardTitle>{dish.name}</CardTitle>
			  <CardText>{dish.description}</CardText>
			  </CardBody>
			</Card>
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
		    <div className="row">
		        <Breadcrumb>
		           <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
		           <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
		           <BreadcrumbItem>{props.dish.name}</BreadcrumbItem>
		        </Breadcrumb>
		        <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>  
		    </div>
		   <div className="row m-1">
		     <RenderDish dish={props.dish}/>
		     <RenderComments comments={props.comments}/>
            </div>
		</div>
		);
}
export default DishDetail;