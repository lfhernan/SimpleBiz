import mongoose from 'mongoose'

export default mongoose.model('Company',{
    companyName:{
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})