import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class ReminderCard extends Component {
	render() {
		return (
			<Card style={{ width: 350 }}>
				<Card.Content>
					<Card.Header>
						<Icon name='idea'/>
						Reminders
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
									* <a>Schedule podiatry follow-up</a>
								</List.Content>
							</List.Item>
							<List.Item>
								<List.Content>
									* <a>Request refill for Simvastation</a>
								</List.Content>
							</List.Item>
						</List>
					</Card.Description>
				</Card.Content>
			</Card>
		)
	}
}

export default ReminderCard;