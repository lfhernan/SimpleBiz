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
    imageurl:{
        type:String,
        default: "https://s3.amazonaws.com/vcimages/140914283510706-disruptive-employee.jpg"
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
    scheduleId: {
        type: String,
    }
})