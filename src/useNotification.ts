import {useContext} from 'react';
import {v4} from 'uuid';
import {NotificationContext} from './notificationProvider/NotificationProvider';

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    return (props: object) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
                id: v4(),
                ...props
            }
        });
    };
};