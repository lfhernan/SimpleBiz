import React,{Component,Fragment} from 'react';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'


const MODAL = gql`
  {
    modalOpen @client
  }
`

const changeState = (client, value) =>
  client.writeData({
    data: { modalOpen: value }
  })


 class NavBar extends Component {


  render() {
    return (
      <Query query={MODAL}>
      {({ data, client }) => (
        <Fragment>
          <button
            className="block f6 link dim br1 ba ph3 pv2 mb2 dib black ml6 mt5"
            onClick={() => changeState(client, true)}>
            {console.log(data)}
          </button>
        </Fragment>
      )}
    </Query>
    );
  }
}

export default NavBar