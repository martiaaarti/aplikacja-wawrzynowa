import { Mongo } from 'meteor/mongo';
import dataModelMinistry from './schema';

const Ministries = new Mongo.Collection('ministries');

Ministries.attachSchema(dataModelMinistry);

export default Ministries;