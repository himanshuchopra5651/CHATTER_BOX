import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://puneetpahuja398:Br0uRftPg5hsG3H4@cluster0.f8ajd1u.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;