const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId}= mongoose.Schema;
const userModel = new Schema(
    {
        fName:{
            type:String,
            required:true,
            trim: true,
            text :true
        }
        ,
        lName:{
            type:String,
            required:true,
            trim: true,
            text :true
        }
        ,
        username:{
            type:String,
            required:true,
            trim: true,
            text :true,
            unique:true 
        },
        email:{
            type:String,
            required:true,
            trim: true,
        },
        password:{
            type:String,
            required:true,
    
        },
        profilePicture:{
            type:String,
            default:""
        },
        coverPicture:{  
            type:String,
            default:""
         },
        bMonth:{
            type:Number,
            required:true,
        },
        bYear:{
            type:Number,
            required:true,
        },
        bDay:{
            type:Number,
            required:true,
        },
        gender:{
            type:String,
            required:true,      
        },
        verified:{
            type:Boolean,
            default:false
        },
        friends:[
            {
                type:ObjectId,
                ref:"usermodel", 
            }
  
        ],
        followers:[
            {
                type:ObjectId,
                ref:"usermodel",
            }
        ],
        following:[
            {
                type:ObjectId,
                ref:"usermodel",

            }
        ],
        request:[
            {
                type:ObjectId,
                ref:"usermodel",
            }
        ],
        search:[
            {
                user:{
                    type:ObjectId,
                    ref:"usermodel",
                    required:true,
                    text:true,
                },
                createdAt:{
                    type:Date,
                    required:true,
                
                }
            } 
        ],
        details:{
            bio:{
                type:String,

            },
            otherName:{
                type:String,                
            },
            job:{
                type:String,            
            },
            workplace:{
                type:String,
            },
            highSchool:{
                type:String,
            },
            college:{
                type:String,
            },
            currentCity:{
                type:String,    
            },
            hometown:{
                type:String,        
                },  
            relationship:{
                type:String,
                enum:["Single","In a relationship","It's Complicated","Married","Divorced"],
            },
            instagram:{
                type:String,
            }   
        },
        savedpost:[
            {
                post:{ 
                    type:ObjectId,
                    ref:"post",
                },      
                savedAt:{
                    type:Date,
                    required:true,
                }
            }
        ]
    },
    {
        timestamps:true
    }
)
module.exports = mongoose.model("usermodel",userModel)
