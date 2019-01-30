import { number, string, arrayOf, shape} from 'prop-types';

export const eventPropTypes = shape({
    _id: string.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    meetingPlace: string.isRequired,
    startDateTime: string.isRequired,
    duration: number,
    attendeesLimit: number,
    attendees: arrayOf( number )
});