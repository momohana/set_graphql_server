const mongoose = require('mongoose')

const Schema = mongoose.Schema

const companySchema = new Schema({
  comid: String,
  name: String,
  comgroup: String,
  comcode: String
})

module.exports = mongoose.model('Company', companySchema)
