import React, { Component } from 'react';
import { Header, Divider, List, Segment, Icon } from 'semantic-ui-react'

class TitleBar extends Component {
	render() {
		return (
			<div style={{ marginTop: 10}}>
				<Header as='h2'>
				    <Icon name='bullseye' />
				    <Header.Content>
				      	Lunomics
				    </Header.Content>
			  	</Header>
				<Divider />
			</div>
		)
	}
}

export default TitleBar;