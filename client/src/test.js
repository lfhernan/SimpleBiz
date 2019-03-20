import React,{Component,Fragment} from 'react';
import {gql} from 'apollo-boost'
import {graphql,compose} from 'react-apollo'
import {ApolloConsumer} from 'react-apollo'
import logIn from './Store/Mutations/logIn'



const getToken=gql`
    mutation{
     login(name:"test",password:"test")
    }
`

const getSecret=gql`
    {
    secret
    }
`


let myClient

class Test extends Component
{

    login=async () =>
    {
        //const {error} = this.props.getSecret
        //console.log(error)
        //if(!error){
            const token=await this.props.getToken()
            localStorage.setItem('token',token.data.login)
            const token2 = await localStorage.getItem('token')
            //console.log(token2)
            await myClient.resetStore()
            this.props.logIn(true)
       // }

        
    }

    secret=async () =>
    {
        const shh=this.props.getSecret

        console.log(shh)
    }
    logout=() =>
    {
        localStorage.removeItem('token')
        myClient.resetStore()
    }

    render()
    {
        return (
            <Fragment>
                <ApolloConsumer>{
                    client =>
                    {
                        myClient=client
                        return true
                    }
                }</ApolloConsumer>
                <button onClick={this.login}>login</button>
                <button onClick={this.secret}>secret</button>
                <button onClick={this.logout}>logout</button>
            </Fragment>
        );
    }
}

export default compose(
    graphql(getToken,{name: 'getToken'}),
    graphql(getSecret,{name: 'getSecret'}),
    graphql(logIn,{name: "logIn"})
)(Test)