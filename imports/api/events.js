import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
 
export const Events = new Mongo.Collection('events');

const dataModelEvents = new SimpleSchema({
     
        id: SimpleSchema.Integer,
        name: String,
        description: String,
        meetingPalace: String,  
        startDateTime: Date,
        duration: SimpleSchema.Integer,
        attendeesLimit: SimpleSchema.Integer,
        attendees:[ SimpleSchema.Integer ]    
    

});

Events.attachSchema(dataModelEvents);