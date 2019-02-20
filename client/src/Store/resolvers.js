import AuthStatus from './Queries/AuthStatus'


export const resolvers = {
    Mutation:{
        logIn: (_,status,{cache})=>{
            const prevState = cache.readQuery({query: AuthStatus})
            const data = {
                ...prevState,
                loggedIn:{
                    __typename: 'loggedIn',
                    status: true
                  }
            }
            cache.writeData({data})
            return {}
            
        }
    }
}