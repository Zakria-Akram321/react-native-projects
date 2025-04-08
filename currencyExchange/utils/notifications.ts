import Snackbar from 'react-native-snackbar';

type showNotificationProps = {
  message: string;
  isSuccess?: boolean;
};

export const showNotification = ({
  message,
  isSuccess = true,
}: showNotificationProps) => {
  Snackbar.show({
    text: message,
    backgroundColor: isSuccess ? '#55E6C1' : '#EA7773',
    textColor: '#000000',
  });
};
