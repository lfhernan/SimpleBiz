import mongoose from 'mongoose'

export default mongoose.model('User',{
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    companyId: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
})