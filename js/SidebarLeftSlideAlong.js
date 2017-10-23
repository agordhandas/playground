import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarLeftSlideAlong extends Component {
  

  render() {
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' visible width='thin' icon='labeled' vertical>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='patientInfo'>
              <Icon name='user' />
              Patient Info
              <br/>Name: Joseph Doe
              <br/>DOB: Jan 23, 1940
              <br/>Blood Group: B+
            </Menu.Item>
            <Menu.Item name='pcpInfo'>
              <Icon name='doctor' />
              <strong>PCP</strong>
              <br/>Dr. Leonard McCoy
              <br/>415-232-2312
              <br/>77 Mass. Ave, Cambridge, MA 02139
            </Menu.Item>
            <Menu.Item name='emergencyContact'>
              <Icon name='compass' />
              <strong>Emergency Contact</strong>
              <br/>Josephina Doe
              <br/>Sister
              <br/>408-999-9999
              <br/>408-754-1651
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              {this.props.children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftSlideAlong