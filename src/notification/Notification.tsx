import React from 'react';
import {FC, useEffect, useState} from 'react';
import CircleExclamation from '../icons/CircleExclamation';
import {NotificationType} from './Notification.types';

const Notification: FC<NotificationType> = (props) => {
    const [exit, setExit] = useState(false);
    const [time, setTime] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const info = '#2f70fd';
    const warning = '#e7d700';
    const error = '#cb0000';
    const success = '#00a40a';

    const startTimer = () => {
        const id = setInterval(() => {
            setTime(prev => {
                if (prev < props.timeout) return prev + 1;

                clearInterval(id);
                return prev;
            });
        }, 1000);

        // @ts-ignore
        setIntervalID(id);
    };

    const pauseTimer = () => {
        if (intervalID == null) return;
        clearInterval(intervalID);
    };

    const closeNotification = () => {
        pauseTimer();
        setExit(true);
        setTimeout(() => {
            props.dispatch({
                type: 'REMOVE_NOTIFICATION',
                id: props.id
            });
        }, 1000);
    };


    useEffect(() => {
        if (time === props.timeout) {
            // Close notification
            closeNotification();
        }
    }, [time]);

    useEffect(() => {
        startTimer();
    }, []);

    let color = info;
    if (props.type == "success") color = success;
    if (props.type == "error") color = error;
    if (props.type == "warning") color = warning;

    return <div onMouseEnter={pauseTimer}
                onMouseLeave={startTimer}
                onClick={props.onClick}
                style={{cursor: props.onClick != null ? 'pointer' : 'default', backgroundColor: color}}
                className={`notification notification__${props.type} ${exit ? 'notification__hide' : ''}`}>
                <span className={'notification__icon'}>
                  <CircleExclamation style={{fill: "white"}}/>
                </span>
        <p className={'notification__msg'}>{props.message}</p>
    </div>;
};

Notification.defaultProps = {
    type: 'info',
    timeout: 10,
    onClick: () => ({})
};

export default Notification;
