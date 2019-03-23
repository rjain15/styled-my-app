import React, { Component } from 'react';
import { Card } from 'reactstrap';
import LoadingSpinner from '../LoadingSpinner';

class ApplicationCard extends Component {

  componentWillMount() {
    this.setState({ loading: true });
    loadActiveAIsCard().then((payload) => {
      const applications = payload;
      this.setState({
        applications,
        loading: false
      });
    })
  }

  render() {
    const { loading, applications } = this.state;
    if (loading) {
      return (
        <Card className="card-box">
          <LoadingSpinner/>
        </Card>
      );
    } else {
      return (
        <DefaultCard title="Applications" subTitle="Active AI's" card={applications}/>
      );
    }
  }
}

export default ApplicationCard;
