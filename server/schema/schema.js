const graphql = require('graphql')
const Movie = require('../models/movie')
const Director = require('../models/director')
const Company = require('../models/company')
const { GraphQLObjectType,
        GraphQLID,
        GraphQLString,
        GraphQLInt,
        GraphQLList,
        GraphQLNonNull,
        GraphQLSchema } = graphql


const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: () => ({
    id:{type: GraphQLID},
    comid:{type: GraphQLString},
    name: {type: GraphQLString},
    comgroup: {type: GraphQLString},
    comcode: {type: GraphQLString}
  })
})

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id:{type: GraphQLID},
    name:{type: GraphQLString},
    genre: {type: GraphQLString},
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return Director.findById(parent.directorId)
      }
    }
  })
})

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id:{type: GraphQLID},
    name:{type: GraphQLString},
    age: {type: GraphQLInt},
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({ directorId: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    company: {
      type: CompanyType,
      args:{id:{type:GraphQLID}},
      resolve(parent, args){
        return Company.findById(args.id)
      }
    },
    movie: {
      type: MovieType,
      args:{id:{type:GraphQLID}},
      resolve(parents, args){
        return Movie.findById(args.id)
      }
    },
    director: {
      type: DirectorType,
      args:{id:{type:GraphQLID}},
      resolve(parents, args){
        return Director.findById(args.id)
      }
    },
    companies: {
      type: new GraphQLList(CompanyType),
      resolve(parent, args) {
        return Company.find({})
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({})
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return Director.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCompany: {
      type: CompanyType,
      args: {
        comid: {type: GraphQLString},
        name: {type: GraphQLString},
        comgroup: {type: GraphQLString},
        comcode: {type: GraphQLString}
      },
      resolve(parents, args) {
        let company = new Company({
          comid: args.comid,
          name: args.name,
          comgroup: args.comgroup,
          comcode: args.comcode
        })
        return company.save()
      }
    },
    addMovie: {
      type: MovieType,
      args: {
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        directorId: {type: GraphQLID}
      },
      resolve(parents, args) {
        let movie = new Movie({
          name: args.name,
          genre: args.genre,
          directorId: args.directorId
        })
        return movie.save()
      }
    },
    addDirector: {
      type: DirectorType,
      args: {
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
      },
      resolve(parents, args) {
        let directo = new Director({
          name: args.name,
          age: args.age
        })
        return director.save()
      }
    },
    updateDirector: {
      type: DirectorType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
      },
      resolve(parent, args) {
        let updateDirector = {}
        args.name && (uodateDirector.name = args.name)
        args.age && (updateDirector.age = args.age)
        return Director.findByIdAndUpdate(args.id, updateDirector, {new: true})
      }
    },
    updateMovie: {
      type: MovieType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        directorId: {type: GraphQLString}
      },
      resolve(parent, args) {
        let updateMovie = {}
        args.name && (uodateMovie.name = args.name)
        args.genre && (updateMovie.genre = args.genre)
        args.directorId && (updateMovie.directorId = args.directorId)
        return Movie.findByIdAndUpdate(args.id, updateMovie, {new: true})
      }
    },
    updateCompany: {
      type: CompanyType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
        comid: {type: GraphQLString},
        name: {type: GraphQLString},
        comgroup: {type: GraphQLString},
        comcode: {type: GraphQLString}
      },
      resolve(parent, args) {
        let updateCompany = {}
        args.comid && (updateCompany.comid = args.comid)
        args.name && (updateCompany.name = args.name)
        args.comgroup && (updateCompany.comgroup = args.comgroup)
        args.comcode && (updateCompany.comcode = args.comcode)
        return Company.findByIdAndUpdate(args.id, updateCompany, {new: true})
      }
    },
    deleteCompany: {
      type: CompanyType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return Company.findByIdAndRemove(args.id)
      }
    },
    deleteMovie: {
      type: MovieType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return Movie.findByIdAndRemove(args.id)
      }
    },
    deleteDirector: {
      type: DirectorType,
      args: {
        id: {type: GraphQLNonNull(GraphQLID)},
      },
      resolve(parent, args) {
        return Director.findByIdAndRemove(args.id)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
