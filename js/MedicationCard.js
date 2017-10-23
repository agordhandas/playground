import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class MedicationCard extends Component {
	render() {
		return (
			<Card style={{width: 350}}>
		    <Card.Content>
		      <Card.Header>
		      <Icon name='eyedropper' />
		        Medication
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
				    		<strong>Simvastatin 40 MG</strong>: 1 tablet evening
				    	</List.Content>
				    </List.Item>
				    <List.Item>
				    	<List.Content>
				    		<strong>Hydrocodone-Acetaminophen 5-325 MG</strong>: as needed
				    	</List.Content>
				    </List.Item>
				    <List.Item>
				    	<List.Content>
				    		<strong>Diovan HCT 20MG</strong>: 1 tablet morning, 1 tablet evening
				    	</List.Content>
				    </List.Item>
				</List>
		      </Card.Description>
		      </Card.Content>
		      <Card.Content extra>
			      <text>
			        Click for details
			      </text>
			   </Card.Content>
		    
		</Card>
		)
	}
}

export default MedicationCard