import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Splash from '../Screens/Splash'
import AuthStack from './Stack/AuthStack'
import OthersStack from './Stack/OthersStack'
import DrawerStack from './Stack/DrawerStack';
// // import BottomNav from './BottomNav/BottomNav'
import Drawer from './Drawer'
// import { connect } from 'react-redux'
// import { Colors, AppTheme } from '../Constants/Colors';
import { useSelector } from 'react-redux';
import { Colors } from '../Constants/Colors';
import { setUser } from '../Redux/actions/authAction';


const Stack = createNativeStackNavigator();

function MainNav(props) {

    // const isLogin = useSelector(state => state.AuthReducer.isLogin);
    const user = useSelector(state => state.AuthReducer.user)

    useEffect(() => {
        setTimeout(() => { setTimePassed(true) }, 2000)
        console.log("userValue", (user))

    })
    const [timePassed, setTimePassed] = useState(false);
    //let user 
    //console.log("chkk", user)
    //try{  
    //}catch(errors) {
    //  console.log("OKKK",errors)
    //  Block of code to handle errors
    // }


    // if (user !== false) {
    return (
        <>
            <StatusBar backgroundColor={Colors.white}
                barStyle={'dark-content'} />
            {!timePassed ?
                <Splash />
                :
                <NavigationContainer
                // theme={AppTheme}
                >
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {user ?
                            <>
                                <Stack.Screen name="Drawer" component={Drawer} />
                                <Stack.Screen name="OthersStack" component={OthersStack} />
                            </>
                            :
                            <Stack.Screen name="AuthStack" component={AuthStack} />

                        }
                    </Stack.Navigator>
                </NavigationContainer>
            }
        </>
    );
    // }
    // else {
    //     return (
    //         <>
    //             <StatusBar backgroundColor={Colors.white}
    //                 barStyle={'dark-content'} />
    //             {!timePassed ?
    //                 <Splash />
    //                 :
    //                 <NavigationContainer
    //                 >
    //                     <Stack.Navigator screenOptions={{ headerShown: false }}>

    //                         <Stack.Screen name="AuthStack" component={AuthStack} />

    //                     </Stack.Navigator>
    //                 </NavigationContainer>
    //             }
    //         </>
    //     );
    // }


}
export default MainNav;