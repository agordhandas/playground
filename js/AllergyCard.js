import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class AllergyCard extends Component {
	render() {
		return (
			<Card style={{width: 350}}>
			    <Card.Content>
			      <Card.Header>
			      	<Icon name='emergency' />
			        Allergies
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			        <br/>  
			        </span>
			      </Card.Meta>
			      <Card.Description>
			        <List>
					    <List.Item>
					    	<List.Content>
					    		<strong>Penicillin</strong>
					    	</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Content>Severity: Moderate</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Content>Reaction: Hives</List.Content>
					    </List.Item>
					</List>
			      </Card.Description>
			      </Card.Content>
			      
			</Card>
		)
	}
}

export default AllergyCard;