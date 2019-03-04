import {gql} from 'apollo-server-express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Provide resolver functions for your schema fields
export default {
    Query: {
        secret: (_,args,{user}) =>
        {
            if(!user) {
                throw new Error('You must be logged in to see secret')
            }
            return 'I like turtles'
        },
        getUser: (_,{id},{user,User}) =>
        {
            console.log(id)
            return User.findById(id)
        },
        getCompany: (_, {id}, {Company}) =>
        {
            return Company.findById(id)
        }

    },
    Mutation: {
        register: async (_,args,{User}) =>
        {
            const user=args
            user.password=await bcrypt.hash(user.password,12)

            return User.create(args)
        },
        login: async (_,{name,password},{User,SECRET}) =>
        {
            const user=await User.findOne({name: name}).exec()

            if(!user) {
                throw new Error('no user found')
            }

            const valid=await bcrypt.compare(password,user.password)

            if(!valid) {
                throw new Error('wrong password')
            }

            const  token=jwt.sign(
                {
                    user: [ user.id,user.name ]
                },
                SECRET,
                {
                    expiresIn: '2h'
                })

            return token
        },
        createCompany: (_,args,{Company}) =>{
            return Company.create(args)
        }
    }
};
