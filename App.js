import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity, ToastAndroid,  } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

//Custom Components
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
        </View>
    );
};



const App = () => {
    // let username = '';
    // let ut = '';
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');


    return (

        <View>
            <Text></Text>
            <Text></Text>
            <Text>User Type: </Text>
            <RNPickerSelect
                onValueChange={(value) => {console.log(value); setType(value);}}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
            />


            {/*<Text>User Name:</Text>*/}
            {/*<TextInput style={{borderWidth: 1}} onChangeText={(text) => setName(text)}/>*/}


            {/*<Text>Password:</Text>*/}
            {/*<TextInput style={{ borderWidth: 1 }} onChangeText={(text) => setPw(text)} />*/}
            {/*<Text></Text>*/}

            {/*<Button title="LOG IN" color = "#6fb01e" onPress={() => Alert.alert("Welcome!")}/>*/}

            {/*<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>*/}
            {/*    <Text>LOG IN</Text>*/}
            {/*</TouchableOpacity>*/}



            {/*<TouchableOpacity onPress={() => ToastAndroid.show(`Welcome ${ut} ${username}`, ToastAndroid.SHORT)}>*/}
            {/*    <Text>LOG IN</Text>*/}
            {/*</TouchableOpacity>*/}
            {/*<Text>{username}</Text>*/}

            <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
            <InputBox label="Password:" onChangeText={(text) => setPw(text)}/>

            <TouchableOpacity onPress={() =>
                ToastAndroid.show('Welcome ' + type + ' ' + name, ToastAndroid.SHORT)}>
                <Text>LOG IN</Text>
            </TouchableOpacity>
            <Text>{pw}</Text>
        </View>
    );
};

export default App;
