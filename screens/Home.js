import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={{height:50, marginTop:20, flexDirection:'row'}}>
                <View>
                <Text style={{color:'#3a643b', fontSize:15}}>    Friday, 4 Sep</Text>
                <Text style={{color:'#3a643b', fontWeight:'900', fontSize:20}}>   Namaste, Angela</Text>
                </View>
                <View style={{marginLeft:100}}>
                <Ionicons name="notifications-outline" size={26} color="black" onPress={()=>navigation.navigate('Notification')}/>
                </View>
            </View>
            <View style={{height: 135, marginTop:20}}>
                <TouchableOpacity 
                activeOpacity={1}
                >
                    <View style={{ flexDirection: 'row', columnGap:115}}>
                        <Text style={{ fontWeight: '900', color: '#3a643b', fontSize: 15 }}>    Shop for Health & Beauty</Text>
                        <MaterialIcons name="arrow-forward-ios" size={20} color="#3a643b" />
                    </View>
                </TouchableOpacity>

                <ScrollView horizontal={true} style={{ paddingTop: 20 }}>
                    <View style={styles.shop_view}>
                        <View style={styles.shop_image_container}>
                        <Image style={styles.shop_image} source={require('../assets/icons/hair.png')} />
                        </View>
                        <Text style={styles.shop_text}>HAIR</Text>
                    </View>

                    <View style={styles.shop_view}>
                        <View style={styles.shop_image_container}>
                        <Image style={styles.shop_image} source={require('../assets/icons/skin.png')} />
                        </View>
                        <Text style={styles.shop_text}>SKIN</Text>
                    </View>

                    <View style={styles.shop_view}>
                        <View style={styles.shop_image_container}>
                        <Image style={styles.shop_image} source={require('../assets/icons/women.png')} /> 
                        </View>
                        <Text style={styles.shop_text}>WOMEN</Text>
                    </View>

                    <View style={styles.shop_view}>
                        <View style={styles.shop_image_container}>
                        <Image style={styles.shop_image} source={require('../assets/icons/sexual.png')} /> 
                        </View>
                        <Text style={styles.shop_text}>SEXUAL</Text>
                    </View>

                    <View style={styles.shop_view}>
                        <View style={styles.shop_image_container}>
                        <Image style={styles.shop_image} source={require('../assets/icons/digestion.png')} />  
                        </View>
                        <Text style={styles.shop_text}>DIGESTION</Text>
                    </View>                   
                </ScrollView>

            </View>

            <View style={{ height: 100 }}>
                <View style={{ flexDirection: 'row', columnGap: 100 }}>
                    <Text style={{ fontWeight: '900', color: '#3a643b', fontSize: 15 }}>    Upcoming Appointments</Text>
                    <Text style={{ color: '#3a643b', fontSize: 15 }}>Clear</Text>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderColor: 'green', borderWidth: 1.5, width: '95%', height: '70%', borderRadius: 20, flexDirection: 'row', alignItems: 'center', columnGap: 30, paddingLeft: 10 }}>
                        <FontAwesome5 name="calendar-check" size={24} color="#3a643b" />
                        <Text style={{ color: '#3a643b' }}>No New Appointments</Text>
                        <TouchableOpacity activeOpacity={0.5}>
                        <Text style={{ color: '#3a643b', fontWeight: '900', fontSize: 15 }}>Book Now</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            <View style={{height: 200 }}>
                <Text style={{ fontWeight: '900', color: '#3a643b', fontSize: 15 }}>    Recent Orders</Text>
                <ScrollView horizontal={true} style={{ paddingTop: 20 }}>

                    <View style={styles.Recent_order_content}>
                         <Image style={{ height: '100%', width: 120, borderBottomLeftRadius:15, borderTopLeftRadius:15 }} source={require('../assets/icons/product1.jpeg')} />

                        <View style={{ width: 180, height: '100%', justifyContent: 'center', alignItems: 'center' , padding:5}}>
                            <Text style={styles.Recent_order_text}>
                                Kuntal Care Capsule Herbal Remedy for Hair Care
                            </Text>

                            <View style={{flexDirection:'row',alignItems:'center', marginTop:5}}>
                                <FontAwesome name="rupee" size={20} color='#3a643b'/>
                                <Text style={{color:'#3a643b', fontWeight:'900', fontSize:20, marginRight:15}}>1,499</Text>

                                <FontAwesome name="rupee" size={15} color='black'/>
                                <Text style={{color:'black', fontWeight:'400', fontSize:15, textDecorationLine:'line-through'}}>1,650</Text>
                            </View>

                            <TouchableOpacity style={{marginTop: 3, width: '60%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 , flexDirection:'row'}}>
                                <MaterialCommunityIcons name="arrow-u-left-top" size={24} color='#3a643b' />
                                <Text style={{color:'#3a643b', fontWeight:'900', marginLeft:3 }}>Reorder</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={styles.Recent_order_content}>
                        <Image style={{ height: '100%', width: 120, borderBottomLeftRadius:15, borderTopLeftRadius:15 }} source={require('../assets/icons/product2.jpeg')} />

                        <View style={{ width: 180, height: '100%', justifyContent: 'center', alignItems: 'center', padding:5 }}>
                            <Text style={styles.Recent_order_text}>
                                Kuntal Care oil Herbal Remedy for Hair Care
                            </Text>

                            <View style={{flexDirection:'row',alignItems:'center', marginTop:5}}>
                                <FontAwesome name="rupee" size={20} color='#3a643b'/>
                                <Text style={{color:'#3a643b', fontWeight:'900', fontSize:20, marginRight:15}}>1,799</Text>

                                <FontAwesome name="rupee" size={15} color='black'/>
                                <Text style={{color:'black', fontWeight:'400', fontSize:15, textDecorationLine:'line-through'}}>1,999</Text>
                            </View>

                            <TouchableOpacity style={{marginTop: 10, width: '60%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 10, flexDirection:'row' }}>
                                <MaterialCommunityIcons name="arrow-u-left-top" size={24} color='#3a643b' />
                                <Text style={{color:'#3a643b', fontWeight:'900'}}>Reorder</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </ScrollView>
            </View>

            <View style={{height: 200 }}>
                <Text style={{ fontWeight: '900', color: '#3a643b', fontSize: 15, }}>    Amrutam Blog</Text>
                <ScrollView horizontal={true} style={{ paddingTop: 20 }}>

                    <View style={styles.blog_content}>
                        <View style={{ width: 130, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.blog_text}>
                                <Text style={{ fontWeight: '900' }}>COVID </Text>
                                <Text>Cases Rapidly High Due to weeks...</Text>
                            </Text>

                            <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#3a643b', width: '65%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: 'white' }}>Read More</Text>
                            </TouchableOpacity>

                            <Text style={styles.blog_date}>06 Dec 2022</Text>
                        </View>

                        <Image style={{ height: '100%', width: 120, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} source={require('../assets/icons/covid2.jpg')} />
                    </View>

                    <View style={styles.blog_content}>
                        <View style={{ width: 130, height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.blog_text}>
                                <Text>Symptoms of Omicorn Virus...</Text>
                            </Text>

                            <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#3a643b', width: '65%', height: '20%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                <Text style={{ color: 'white' }}>Read More</Text>
                            </TouchableOpacity>

                            <Text style={styles.blog_date}>06 Dec 2022</Text>
                        </View>

                        <Image style={{ height: '100%', width: 120, borderTopRightRadius: 15, borderBottomRightRadius: 15 }} source={require('../assets/icons/covid.jpeg')} />
                    </View>

                </ScrollView>
            </View>

            <View style={{ height: 300 }}>
                <Text style={{ fontWeight: '900', color: '#3a643b', fontSize: 15 }}>    What are you looking for ?</Text>
                <ScrollView horizontal={true} style={{ paddingTop: 20 }}>

                    <View style={styles.content}>
                        <View style={styles.content_image_view}>
                            <Image style={{ height: 70, width: 70, borderRadius: 15, }} source={require('../assets/icons/check.png')} />
                        </View>
                        <Text style={styles.content_text}>Take a Quiz</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.content_image_view}>
                            <Image style={{ height: 70, width: 70, borderRadius: 15, }} source={require('../assets/icons/e-book.png')} />
                        </View>
                        <Text style={styles.content_text}>E-books</Text>
                    </View>
                    <View style={styles.content}>
                        <View style={styles.content_image_view}>
                            <Image style={{ height: 70, width: 70, borderRadius: 15, }} source={require('../assets/icons/tv.png')} />
                        </View>
                        <Text style={styles.content_text}>Amrutam TV</Text>
                    </View>

                </ScrollView>
            </View>

            <View style={{ height: 300 }}>
                <Text style={{ fontWeight: '900', color: '#3a643b', fontSize: 15 }}>    Top Rated Doctors </Text>
                <ScrollView horizontal={true} style={{ paddingTop: 20 }}>

                    <View style={styles.card}>
                        <Image style={{ height: 150, width: 180, borderRadius: 15 }} source={require('../assets/icons/doctor.jpg')} />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Doctor</Text>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#3a643b', width: '65%', height: '11%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'white' }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image style={{ height: 150, width: 180, borderRadius: 15 }} source={require('../assets/icons/doctor.jpg')} />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Doctor</Text>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#3a643b', width: '65%', height: '11%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'white' }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image style={{ height: 150, width: 180, borderRadius: 15 }} source={require('../assets/icons/doctor.jpg')} />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Doctor</Text>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#3a643b', width: '65%', height: '11%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'white' }}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.card}>
                        <Image style={{ height: 150, width: 180, borderRadius: 15 }} source={require('../assets/icons/doctor.jpg')} />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>Doctor</Text>
                        <TouchableOpacity style={{ marginTop: 10, backgroundColor: '#3a643b', width: '65%', height: '11%', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'white' }}>Follow</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    card: {
        height: '85%',
        width: 180,
        alignItems: 'center',
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'grey',
        shadowColor: 'black',
        elevation: 2,
    },
    content: {
        height: '85%',
        width: 140,
        alignItems: 'center',
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'grey',
        shadowColor: 'black',
        elevation: 2,
    },
    content_image_view: {
        height: 150,
        width: 140,
        backgroundColor: '#fff8e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:20
    },
    content_text: {
        fontWeight: '400',
        marginTop: 25,
        color: '#3a643b',
        fontSize: 17,
    },
    blog_content: {
        height: '85%',
        width: 250,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'grey',
        shadowColor: 'black',
        elevation: 2,
    },
    blog_text: {
        fontWeight: '400',
        color: '#3a643b',
        fontSize: 17,
    },
    blog_image_view: {
        height: '100%',
        width: 120,
        justifyContent: 'center',
        borderRadius: 15
    },
    blog_date: {
        fontWeight: 'bold',
        color: '#3a643b',
        fontSize: 13,
        marginTop: 5
    },
    Recent_order_content:{
        height: '85%',
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'grey',
        shadowColor: 'black',
        elevation: 2,
    },
    Recent_order_text: {
        fontWeight: '500',
        color: '#3a643b',
        fontSize: 17,
    },
    // shop_order_content:{
    //     height: '85%',
    //     width: 300,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginLeft: 15,
    //     backgroundColor: 'white',
    //     borderRadius: 20,
    //     borderColor: 'grey',
    //     shadowColor: 'black',
    //     elevation: 2,
    // },
    shop_view:{
        alignItems:'center',
        marginLeft:22,
        borderRadius:10

    },
    shop_image_container:{
        backgroundColor:'#fff7e4',
        height:55,
        width:55,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    shop_image:{
        height: 40, 
        width: 40, 
        // backgroundColor:'#fff7e4', 
        borderRadius:10,
    },
    shop_text:{
        fontSize:12,
        marginTop:5,
    }

});

export default Home