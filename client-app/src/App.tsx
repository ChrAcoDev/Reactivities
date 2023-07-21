import React, { FC, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List, ListItem } from 'semantic-ui-react';

const App: FC<{}> = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then(resp => {
      setActivities(resp.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
      <List>
        {activities.map((activity: any) => (
          <List.Item key={activity.id} >{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
