import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';


export default function App() {
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {page === 1 && (
        <View style={styles.page}>
          <Image style={styles.image} source={require('./assets/profile.jpeg')}/>
          <Text style={styles.header }>Charles Dave Dela Cruz</Text>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
        <View style= {styles.contacts}>
          <View style= {styles.contact}>
            <Ionicons name="mail" size={20} color="white" 
            style={styles.icon} />
            <Text style={styles.text}>Charlesadave28@gmail.com</Text>
          </View> 
          <View style= {styles.contact}>
            <Ionicons name="call" size={20} color="green" 
            style={styles.icon} />
            <Text style={styles.text}> 09457801364</Text>
          </View> 
          <View style= {styles.contact}>
            <Ionicons name="location" size={20} color="red" 
            style={styles.icon} />
            <Text style={styles.text}> 12 T Marcelo St, Dalandanan Val.
            </Text>
          </View> 
        </View>
          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Icon name="arrow-forward" size={30} color="yellowgreen" />
          </TouchableOpacity>
        </View>
      )}

      {page === 2 && (
        <View style={styles.page}>
          <Text style={styles.header}>About me</Text>
          <Text style={{fontSize: 18, color: 'yellow', textAlign: 'center'}}>    Hello I'm Charles Dave Dela Cruz, an aspiring IT professional passionate about technology, software development, and problem-solving. Currently pursuing my studies in Information Technology, I want to specialize in web development. I am always eager to learn new technologies,  and enhance my skills in full stack web development I'm interest in how computers work and believe technology is the way to the advancement of society in the future</Text>
          <View style= {styles.contact}>
          <TouchableOpacity style={styles.button} onPress={handlePrevPage}>
            <Icon name="arrow-back" size={30} color="yellowgreen" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Icon name="arrow-forward" size={30} color="yellowgreen" />
          </TouchableOpacity>
          </View>
        </View>
      )}

      {page === 3 && (
        <View style={styles.page}>
          <Text style={styles.header}>Education</Text>
          <View style={{alignContent: 'flex-start'}}>
            <Text style={styles.sectionTitle}>Elementary</Text>
            <Text style={[styles.text]}>  Antonio Regidor <Text style={{color: 'grey'}}>(2007 - 2013) </Text></Text>
            <Text style={styles.sectionTitle}>High School</Text>
            <Text style={styles.text}>  Dalandanan National High School</Text>
            <Text style={{color: 'grey', paddingBottom: 10}}>      (2013 - 2017)</Text>
            <Text style={styles.sectionTitle}>Senior High School</Text>
            <Text style={styles.text}>  Dalandanan National High School</Text>
            <Text style={{color: 'grey', paddingBottom: 10}}>      (2016 - 2019)</Text>
            <Text style={styles.sectionTitle}>College</Text>
            <Text style={styles.text}>  Global Reciprocal College</Text><Text style={{color: 'grey'}}>     (2022 - present)</Text>
          </View>
          <View style= {styles.contact}>
          <TouchableOpacity style={styles.button} onPress={handlePrevPage}>
            <Icon name="arrow-back" size={30} color="yellowgreen" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Icon name="arrow-forward" size={30} color="yellowgreen" />
          </TouchableOpacity>
          </View>
        </View>
      )}

      {page === 4 && (
        <View style={styles.page}>
          <Text style={styles.header}>Projects</Text>
          <Text style={styles.sectionTitle}>SysArch 2</Text>
          <Text style={styles.text}>Inventory System</Text>
          <Text style={styles.sectionTitle}>DBMS</Text>
          <Text style={styles.text}>Inventory System Database</Text>
          <TouchableOpacity style={styles.button} onPress={handlePrevPage}>
            <Icon name="arrow-back" size={30} color="yellowgreen" />
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  padding: 20,
   backgroundColor: '#1e1e1e',
  },
  page: {
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#87ceeb'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#008080',
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10
    
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    width: 50,
    justifyContent: 'center',
  },
 
  contacts: {
    flexDirection: 'column',
    marginVertical: 20
  },
  contact:{
    flexDirection: 'row',
     marginVertical: 1
  },
  icon: {
    paddingRight: 10,
  },

});
