import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List, Statistic } from 'semantic-ui-react';

class StepsCard extends Component {
	render() {
		return(
			<Card style={{width: 350}}>
		    <Card.Content>
		      <Card.Header>
		      <Icon name='paw' />
		        Steps
		      </Card.Header>
		      <Card.Description>
		        <Statistic style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				    <Statistic.Value>5,550</Statistic.Value>
				    <Statistic.Label>Avg. daily steps last week</Statistic.Label>
				</Statistic>
		      </Card.Description>
		      </Card.Content>
		      <Card.Content extra>
			      <text>
			        from HealthKit
			      </text>
			   </Card.Content>
		    
		</Card>
		)
	}
}

export default StepsCard;