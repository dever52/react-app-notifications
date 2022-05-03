import { FC } from 'react';
import React from 'react';
import { NotificationProviderType } from './NotificationProvider.types';
declare const NotificationContext: React.Context<(obj: object) => void>;
declare const NotificationProvider: FC<NotificationProviderType>;
export { NotificationProvider, NotificationContext };
