import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class ClinicalTrialsCard extends Component {
	render() {
		return (
			<Card style={{width: 350, color:'#FF0000'}}>
			    <Card.Content>
			      <Card.Header>
			      	<Icon name='rocket' />
			        Clinical Trials
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
					    		<strong>
					    				TORC1/2 Inhibitor INK128 and EGFR Inhibitor AZD9291 in 
					    				...
					    		</strong>
					    	</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Content>
					    		<strong>Phase</strong>: 2
					    	</List.Content>
						</List.Item>
						<List.Item>
					    	<List.Icon name='marker'/>
					    	<List.Content>Moores Cancer Center, UCSD, San Diego, CA 92122</List.Content>
					    </List.Item>
					    <List.Item>
					    	<List.Icon name='mail'/>
					    	<List.Content>clinicaltrials@ucsd.edu</List.Content>
					    </List.Item>
					</List>
			      </Card.Description>
			      </Card.Content>
			      <Card.Content extra>
				      <text>
				        ...And 20 more
				      </text>
				   </Card.Content>
			</Card>
		)
	}
}

export default ClinicalTrialsCard;