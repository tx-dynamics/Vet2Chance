import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  Share,
  Pressable,
  ScrollView
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "../../Constants/Colors";
import Fonticon from '../../Constants/FontIcon';
import { wp } from '../../Helpers/Responsiveness';
import { connect } from 'react-redux'
// import { SetSession, ChangeProfileRoute } from '../../Redux/Actions/Actions'
import { iconPath } from '../../Constants/icon';
import { fonts } from '../../Constants/Fonts';
import ResponsiveText from '../../Components/RnText';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const DATA = [
  { id: "1", ImageName: iconPath.NBA, title: "football" },
  { id: "2", ImageName: iconPath.NCAAF, title: "hockey" },
  { id: "3", ImageName: iconPath.NFL, title: "basketball" },
  { id: "4", ImageName: iconPath.MLB, title: "tennis" },
  { id: "5", ImageName: iconPath.NHL, title: "cricket" },
]

const DATA1 = [
  { id: "5", ImageName: iconPath.ChatIcon, title: "Chat" },
  // { id: "6", ImageName: iconPath.Leaderboard, title: "Leaderboard" },
  // { id: "7", ImageName: iconPath.BettingIcon, title: "Betting Guide" },
  { id: "8", ImageName: iconPath.Podcasts, title: "Podcasts" },
  { id: "9", ImageName: iconPath.Logout, title: "Logout" },
];

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : ''
    };
  }


  navigate = (item) => {
    if (item === "1") {
      this.props.navigation.navigate("HomeStack" , {screen :"HotMatches",  })
      // this.props.navigation.navigate("HomeStack")
      // this.props.navigation.navigate('DrawerStack', { screen: 'TicketMenu' });
    }
    else if (item === "2") {
      this.props.navigation.navigate("HomeStack" , {screen :"HotMatches"})

      // this.props.navigation.navigate("BinStack")
      // this.props.navigation.navigate('BinStack', { screen: 'AddBin' });

    }
    else if (item === "3") {
      this.props.navigation.navigate("HomeStack" , {screen :"HotMatches"})

      // this.props.navigation.navigate('DrawerStack', { screen: 'Store' });
    }
    else if (item === "4") {
      // this.props.navigation.navigate("RequestBin")
      // DrawerStack
      // this.props.navigation.closeDrawer()
      // this.props.navigation.navigate('DrawerStack', { screen: 'RequestBin' });
    }
    else if (item === "5") {
      // this.props.navigation.navigate("OthersStack" , {screen :"ChatScreen"})

      // this.props.navigation.navigate('DrawerStack', { screen: 'Cart' });
      // this.props.navigation.closeDrawer()
      // this.props.navigation.navigate('DrawerStack', { screen: 'Addperson' });
    }
    else if (item.id === "6") {
      // this.props.navigation.closeDrawer()
      // this.props.navigation.navigate('DrawerStack', { screen: 'MemberShip' });
    }
    else if (item === "8") {
      this.props.navigation.navigate('Podcasts');

      // this.props.navigation.closeDrawer()
      // this.props.navigation.navigate('DrawerStack', { screen: 'Orders' });
    }
    else if (item === "9") {
       this.props.navigation.navigate('AuthStack', { screen: 'Login' });

      // this.props.navigation.closeDrawer()
      // this.props.navigation.navigate('DrawerStack', { screen: 'Orders' });
    }
    else {
      // alert("elseeee")
    }
  }

  upperNavigation = (id) => {
    if (id === "3") {
      this.props.navigation.navigate('DrawerStack', { screen: 'QrCode' });
    } else if (id === "4") {
      this.props.navigation.navigate('DrawerStack', { screen: 'Store' });
    }

  }

componentDidMount = () => {
  firestore()
    .collection('Users').doc(auth()?.currentUser?.uid)
    .get().then(querySnapshot => {
      console.log('snap', querySnapshot?._data?.fullName )
      this.setState({name : querySnapshot?._data?.fullName});
    });
}

// console.log("photo",photo)
  
LogoutFun = async () => {
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.darkGreen, paddingHorizontal: wp(5) }}>

        <Image source={iconPath.Logo} style={{ width: "90%", height: wp(14), resizeMode: "contain", alignSelf: "center", marginTop: wp(7) }} />
        <ResponsiveText size="h7" fontFamily={fonts.Montserrat_Bold}
         margin={[wp(2), 0, wp(1), 3]}>
           {this?.state?.name}
           </ResponsiveText>
        <View>

          <FlatList
            data={DATA}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <>
                <TouchableOpacity onPress={
                  () => 
                // this.navigate(item.id)
                this.props.navigation.navigate("HotMatches", {item:item.title })
              
              }
                 style={{ flexDirection: "row", alignItems: "center", paddingVertical: wp(6) }}>
                  <Image source={item.ImageName} style={{ width: wp(7), 
                    height: wp(7), resizeMode: "contain" }} />
                  <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} 
                  textAlign={"center"} margin={[wp(0), 0, wp(0), wp(3.5)]}>{item.title}</ResponsiveText>
                </TouchableOpacity>
                <View style={{ backgroundColor: "#DADADA", height: 1, width: "100%", }} />
              </>
            )} />
        </View>

        {DATA1.map((item, index) =>
          <TouchableOpacity onPress={() => this.navigate(item.id)} style={{ flexDirection: "row", alignItems: "center", paddingVertical: wp(4) }}>
            <Image source={item.ImageName} style={{ width: wp(4.5), height: wp(4.5), resizeMode: "contain" }} />
            <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} textAlign={"center"} margin={[wp(0), 0, wp(0), wp(5.8)]}>{item.title}</ResponsiveText>
          </TouchableOpacity>
        )}

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    LoginType: state.AuthReducer.LoginType,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SessionMaintain: (userData) => dispatch(SetSession(userData)),
    ChangeRoute: (userData) => dispatch(ChangeProfileRoute(userData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  drawerbg: {
    width: 280,
    height: 230
  },
  dp: {

    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#000'
  },
  text: {
    color: '#6D6D6D',
    position: 'absolute',
    bottom: 37,
    left: 20,
    fontSize: 20
  },
  text2: {
    color: '#6D6D6D',
    position: 'absolute',
    bottom: 12,
    left: 20,
    fontSize: 17
  },
  subConatainer: {
    marginLeft: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 60
  },
  drawerIcon: {
    // marginLeft: 50,
    height: 28,
    width: 28,
  },
  drawerText: {
    fontSize: 18,
    marginLeft: 15,
    textAlign: "center",
  }
});

