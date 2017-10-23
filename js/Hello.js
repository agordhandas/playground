import React, { Component } from 'react';
import { Card, Icon, Image, Grid, Container, Header, List } from 'semantic-ui-react'
import TitleBar from './TitleBar';
import SidebarLeftSlideAlong from './SidebarLeftSlideAlong';
import LabsCard from './LabsCard';
import AppointmentCard from './AppointmentCard'
import AllergyCard from './AllergyCard';
import ClinicalTrialsCard from './ClinicalTrialsCard';
import MedicationCard from './MedicationCard';
import StepsCard from './StepsCard';
import ReminderCard from './ReminderCard';
import GlucoseCard from './GlucoseCard';

class Hello extends Component {
  render() {
    return (
	<div style={{ marginTop: 15, marginLeft: 15, marginRight: 15}}>
		<TitleBar/>
		<SidebarLeftSlideAlong>
		    <Card.Group itemsPerRow={3} style={{ marginRight: 15}}>
			    <LabsCard />
			    <AppointmentCard/>
			    <AllergyCard/>
			    <ClinicalTrialsCard/>
			    <MedicationCard/>
			    <StepsCard/>
			    <ReminderCard/>
			    <GlucoseCard/>
		  	</Card.Group>
		</SidebarLeftSlideAlong>
  	</div>
    )
  }
}

export default Hello;