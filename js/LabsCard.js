import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class LabsCard extends Component {
	render() {
		return(
		<Card style={{width: 350}}>
		    <Card.Content>
		      <Card.Header>
		      	<Icon name='lab' />
		        Labs
		      </Card.Header>
		      <Card.Meta>
		        <span className='date'>
		          Latest reports from October 2017
		        </span>
		      </Card.Meta>
		      <Card.Description>
		        <List>
				    <List.Item>
				    	<List.Content>
				    		<strong>Total Cholesterol</strong>: 25 mg/dL
				    	</List.Content>
				    </List.Item>
				    <List.Item>
				    	<List.Content>
				    		<strong>LDL</strong>: 10 mg/dL
				    	</List.Content>
				    </List.Item>
				    <List.Item>
				    	<List.Content>
				    		<strong>HDL</strong>: 15 mg/dL
				    	</List.Content>
				    </List.Item>
				    <List.Item>
				    	<List.Content>
				    		<strong>White Blood Count</strong>: 9.2 Thou/uL
				    	</List.Content>
				    </List.Item>
				</List>
		      </Card.Description>
		      </Card.Content>
		      <Card.Content extra>
			      <text>
			        Click for more
			      </text>
			   </Card.Content>
		    
		</Card>
		)
	}
} 

export default LabsCard;