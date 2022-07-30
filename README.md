# react-app-notifications
## Usage
### Installation
```
npm install @dever52/react-app-notifications
```

### Add NotificationProvider
```
root.render(
    <React.StrictMode>
        <NotificationProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </NotificationProvider>
    </React.StrictMode>
);
```

### Show notification
```
const ExampleComponent: FC = () => {
    const dispatchNotification = useNotification();

    const showNotification = () => {
        dispatchNotification({message: 'An example text', timeout: 10, type: 'error'});
    }
    
    return (
        <button onClick={showNotification}>click me</button>
    );
}
```
