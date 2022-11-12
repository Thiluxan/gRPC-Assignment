const PROTO_PATH = "./players.proto";

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase:true,
    longs:String,
    enums:String,
    arrays:true
});

const playersProto = grpc.loadPackageDefinition(packageDefinition)

const {v4:uuid} = require('uuid')

const server = new grpc.Server()

const players = [
    {
        id:'a68b823c-7ca6-44bc-b721-fb4d5312cafc',
        name:'Virat Kohli',
        country:'India'
    },
    {
        id:'a68b823c-7ca6-44bc-b721-fb4d5312cnhu',
        name:'MS Dhoni',
        country:'India'
    },
    {
        id:'a68b823c-7ca6-87yh-b721-fb4d5312cafc',
        name:'Kumar Sangakkara',
        country:'Sri Lanka'
    }
]