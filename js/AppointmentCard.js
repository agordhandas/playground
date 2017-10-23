import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class AppointmentCard extends Component {
	render() {
		return (
			<Card style={{width: 350}}>
			    <Card.Content>
			      <Card.Header>
			      	<Icon name='calendar' />
			        Appointments
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			          Upcoming Appointments
			        </span>
			      </Card.Meta>
			      <Card.Description>
			        <List>
					    <List.Item>
					    	<List.Content>
					    		<strong>Cardiology</strong>
					    	</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Icon name='id badge'/>
					    	<List.Content>Dr. John Smith</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Icon name='hospital'/>
					    	<List.Content>Palo Alto Medical Foundation</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Icon name='marker'/>
					    	<List.Content>1 Infinite Loop Drive, Cupertino, CA 94080</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Icon name='phone'/>
					    	<List.Content>408-000-0000</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Icon name='wait'/>
					    	<List.Content>Thursday, October 26, 12:00</List.Content>
					    </List.Item>
					</List>
			      </Card.Description>
			      </Card.Content>
			      <Card.Content extra>
				      <text>
				        ...And two more
				      </text>
				   </Card.Content>
			</Card>
		)
	}
}

export default AppointmentCard;