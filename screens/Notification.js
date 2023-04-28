import { useState } from 'react';
import { StyleSheet, Text, View , FlatList, SafeAreaView} from 'react-native';

const Notification = ()=> {

  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'New message from John',
      message: 'Namaste!\nWelcome to the Amrutam Family :)\nWe hope you have a holistic experience here. ',
      date: '2022-04-16',
    },
    {
      id: '2',
      title: 'New event invitation',
      message: 'You are invited to the annual company picnic!',
      date: '2022-04-14',
    },
    {
      id: '3',
      title: 'Package delivered',
      message: 'Your package has been delivered to your front door.',
      date: '2022-04-12',
    },
  ]);

  const NotificationItem = ({ notification }) => {
    return (
      <View style={styles.container_2}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message}>{notification.message}</Text>
        <Text style={styles.date}>{notification.date}</Text>
    </View>
    );
  };

  return (
      <SafeAreaView style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container_2: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 14,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default Notification