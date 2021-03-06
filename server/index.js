import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import typeDefs from './typedefs'
import resolvers from './resolvers'
import Company from './models/Company'
import User from './models/User'
import jwt from 'jsonwebtoken'
import cors from 'cors'


const SECRET='12345'


const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser: true});


const server=new ApolloServer({
    typeDefs,resolvers,context: async ({req,res}) =>
    {
        const token=await req.headers.authorization
        console.log(token)
        try {
            const {user}=await jwt.verify(token,SECRET);
            req.user=user;
        } catch(err) {
            console.log(err);
        }

        console.log(`token: ${ req.user }`)
        return {
            req,
            res,
            User,
            Company,
            SECRET,
            user: req.user
        }
    }
});

const app=express()
app.use(cors(
    // {
    // "origin": "http://localhost:3000",
    // }
))
//app.use(addUser)
server.applyMiddleware({app});

app.listen({port: 4000},() =>
    console.log(`🚀 Server ready at http://localhost:4000${ server.graphqlPath }`)
);