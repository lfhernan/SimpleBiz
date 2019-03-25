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
        getCompany: async (_, args, {Company,user}) =>
        {   
            if(!user) {
                throw new Error('You must be logged in to see company info')
            }
            

            return Company.findById(user[0])
        },
        getEmployees(_,args,{User,user}){
            console.log(user)
            if(!user || user[2] != 'AuthCompany') {
                throw new Error('You must be a company in order to retrieve employee info')
            }

            return User.find({companyId: user[0]})
        }

    },
    Mutation: {
        register: async (_,args,{User,user}) =>
        {
            const newUser=args
            newUser.password=await bcrypt.hash(newUser.password,12)
            console.log(user)
            newUser.companyId = await user[0]

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
        loginCompany: async (_,{email,password},{Company,SECRET}) =>
        {
            const company=await Company.findOne({email: email}).exec()

            if(!company) {
                throw new Error('no Company found')
            }
            

            const valid=await bcrypt.compare(password,company.password)

            console.log(valid)

            if(!valid) {
                throw new Error('wrong password')
            }

            const  token=jwt.sign(
                {
                    user: [ company.id,company.companyName,"AuthCompany" ]
                },
                SECRET,
                {
                    expiresIn: '2h'
                })

            return token
            
        },
        createCompany:async (_,args,{Company}) =>{
            const company=args

            company.password=await bcrypt.hash(company.password,12)
            
            return Company.create(args)
        },
        editCompanyEmployee: async(_,args,{User,user})=>{

            if(!user || user[2] != 'AuthCompany') {
                throw new Error('You must be a company in order to retrieve employee info')
            }

            // this may not work Daniel / Marcel
            const updatedUser =  await User.findOneAndUpdate({id: args.id},{name: args.name})

            return updatedUser


        }
    }
};
