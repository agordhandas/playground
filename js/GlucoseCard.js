import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react';

class GlucoseCard extends Component {
	render() {
		return (
			<Card style={{ width: 350}}>
				<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<svg width="120" height="120">
					  <polyline fill="none" stroke="black" 
					      points="20,100 40,60 70,80 100,20"/>
					</svg>
				</div>
				<Card.Content>
			      <Card.Header>
			        Glucose
			      </Card.Header>
			      <Card.Meta>
			        <span className='date'>
			          
			        </span>
			      </Card.Meta>
			      <Card.Description>
			        75 mg/dl - 89 mg/dl
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			      Click for more details
			    </Card.Content>
			</Card>
		)
	}
}

export default GlucoseCard