import { Mongo } from 'meteor/mongo';
import ministrySchema from './schema';

const Ministries = new Mongo.Collection('ministries');

Ministries.attachSchema(ministrySchema);

export default Ministries;