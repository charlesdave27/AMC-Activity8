import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image} from 'react-native';

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
          <Image style={styles.image} source={{uri: 'https://th.bing.com/th/id/OIP.Hel1rUkKSwgqt29tie7v0AAAAA?w=340&h=270&rs=1&pid=ImgDetMain'}}/>
          <Text style={styles.header}>Charles Dave Dela Cruz</Text>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <Text style={styles.text}>Email: Charlesadave28@gmail.com</Text>
          <Text style={styles.text}>Phone: 09457801364</Text>
          <Text style={styles.text}>Address: 12 T Marcelo St, Dalandanan Val.</Text>

          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Text style={styles.buttonText}>Next Page</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 2 && (
        <View style={styles.page}>
          <Text style={styles.sectionTitle}>About me</Text>
          <Text style={styles.text}> asda</Text>

          <TouchableOpacity style={styles.button} onPress={handlePrevPage}>
            <Text style={styles.buttonText}>Previous Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Text style={styles.buttonText}>Next Page</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 3 && (
        <View style={styles.page}>
          <Text style={styles.header}>Education</Text>
          <Text style={styles.sectionTitle}>Elementary</Text>
          <Text style={styles.text}>Antonio Regidor (2007 - 2013)</Text>
          <Text style={styles.sectionTitle}>High School</Text>
          <Text style={styles.text}>Dalandanan National High School (2013 - 2016)</Text>
          <Text style={styles.sectionTitle}> Senior High School</Text>
          <Text style={styles.text}>Dalandanan National High School (2016 - 2019)</Text>
          <Text style={styles.sectionTitle}> College</Text>
          <Text style={styles.text}>Global Reciprocal College (2022 - )</Text>

          <TouchableOpacity style={styles.button} onPress={handlePrevPage}>
            <Text style={styles.buttonText}>Previous Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNextPage}>
            <Text style={styles.buttonText}>Next Page</Text>
          </TouchableOpacity>
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
            <Text style={styles.buttonText}>Previous Page</Text>
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
   backgroundColor: 'black',
  },
  page: {
    flexDirection: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#87ceeb'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 60,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 40,
    color: '#008080'
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
    marginBottom: 20
    
  },
  button: {
    marginTop: 20,
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
