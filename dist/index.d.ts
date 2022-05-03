import React, { ReactNode, FC } from 'react';

declare type NotificationProviderType = {
    children?: ReactNode;
};

declare const NotificationContext: React.Context<(obj: object) => void>;
declare const NotificationProvider: FC<NotificationProviderType>;

declare const useNotification: () => (props: object) => void;

export { NotificationContext, NotificationProvider, useNotification };
