import React, { useState, useEffect } from 'react'
import { View, StyleSheet,Text, FlatList, ActivityIndicator, Image, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';
import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import HotMatchesCard from './HotMatchesCard'
import HomeHeadings from './HomeHeadings'
import EventCard from '../Events/EventCard'
import Snackbar from 'react-native-snackbar';
import CountryFlag from "react-native-country-flag";


const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]
const country = 
{'Afghanistan': 'AF',
 'Albania': 'AL',
 'Algeria': 'DZ',
 'American Samoa': 'AS',
 'Andorra': 'AD',
 'Angola': 'AO',
 'Anguilla': 'AI',
 'Antarctica': 'AQ',
 'Antigua and Barbuda': 'AG',
 'Argentina': 'AR',
 'Armenia': 'AM',
 'Aruba': 'AW',
 'Australia': 'AU',
 'Austria': 'AT',
 'Azerbaijan': 'AZ',
 'Bahamas': 'BS',
 'Bahrain': 'BH',
 'Bangladesh': 'BD',
 'Barbados': 'BB',
 'Belarus': 'BY',
 'Belgium': 'BE',
 'Belize': 'BZ',
 'Benin': 'BJ',
 'Bermuda': 'BM',
 'Bhutan': 'BT',
 'Bolivia, Plurinational State of': 'BO',
 'Bonaire, Sint Eustatius and Saba': 'BQ',
 'Bosnia and Herzegovina': 'BA',
 'Botswana': 'BW',
 'Bouvet Island': 'BV',
 'Brazil': 'BR',
 'British Indian Ocean Territory': 'IO',
 'Brunei Darussalam': 'BN',
 'Bulgaria': 'BG',
 'Burkina Faso': 'BF',
 'Burundi': 'BI',
 'Cambodia': 'KH',
 'Cameroon': 'CM',
 'Canada': 'CA',
 'Cape Verde': 'CV',
 'Cayman Islands': 'KY',
 'Central African Republic': 'CF',
 'Chad': 'TD',
 'Chile': 'CL',
 'China': 'CN',
 'Christmas Island': 'CX',
 'Cocos (Keeling) Islands': 'CC',
 'Colombia': 'CO',
 'Comoros': 'KM',
 'Congo': 'CG',
 'Congo, the Democratic Republic of the': 'CD',
 'Cook Islands': 'CK',
 'Costa Rica': 'CR',
 'Country name': 'Code',
 'Croatia': 'HR',
 'Cuba': 'CU',
 'Curaçao': 'CW',
 'Cyprus': 'CY',
 'Czech Republic': 'CZ',
 "Côte d'Ivoire": 'CI',
 'Denmark': 'DK',
 'Djibouti': 'DJ',
 'Dominica': 'DM',
 'Dominican Republic': 'DO',
 'Ecuador': 'EC',
 'Egypt': 'EG',
 'El Salvador': 'SV',
 'Equatorial Guinea': 'GQ',
 'Eritrea': 'ER',
 'Estonia': 'EE',
 'Ethiopia': 'ET',
 'Falkland Islands (Malvinas)': 'FK',
 'Faroe Islands': 'FO',
 'Fiji': 'FJ',
 'Finland': 'FI',
 'France': 'FR',
 'French Guiana': 'GF',
 'French Polynesia': 'PF',
 'French Southern Territories': 'TF',
 'Gabon': 'GA',
 'Gambia': 'GM',
 'Georgia': 'GE',
 'Germany': 'DE',
 'Ghana': 'GH',
 'Gibraltar': 'GI',
 'Greece': 'GR',
 'Greenland': 'GL',
 'Grenada': 'GD',
 'Guadeloupe': 'GP',
 'Guam': 'GU',
 'Guatemala': 'GT',
 'Guernsey': 'GG',
 'Guinea': 'GN',
 'Guinea-Bissau': 'GW',
 'Guyana': 'GY',
 'Haiti': 'HT',
 'Heard Island and McDonald Islands': 'HM',
 'Holy See (Vatican City State)': 'VA',
 'Honduras': 'HN',
 'Hong Kong': 'HK',
 'Hungary': 'HU',
 'ISO 3166-2:GB': '(.uk)',
 'Iceland': 'IS',
 'India': 'IN',
 'Indonesia': 'ID',
 'Iran, Islamic Republic of': 'IR',
 'Iraq': 'IQ',
 'Ireland': 'IE',
 'Isle of Man': 'IM',
 'Israel': 'IL',
 'italy': 'IT',
 'Jamaica': 'JM',
 'Japan': 'JP',
 'Jersey': 'JE',
 'Jordan': 'JO',
 'Kazakhstan': 'KZ',
 'Kenya': 'KE',
 'Kiribati': 'KI',
 "Korea, Democratic People's Republic of": 'KP',
 'Korea, Republic of': 'KR',
 'Kuwait': 'KW',
 'Kyrgyzstan': 'KG',
 "Lao People's Democratic Republic": 'LA',
 'Latvia': 'LV',
 'Lebanon': 'LB',
 'Lesotho': 'LS',
 'Liberia': 'LR',
 'Libya': 'LY',
 'Liechtenstein': 'LI',
 'Lithuania': 'LT',
 'Luxembourg': 'LU',
 'Macao': 'MO',
 'Macedonia, the former Yugoslav Republic of': 'MK',
 'Madagascar': 'MG',
 'Malawi': 'MW',
 'Malaysia': 'MY',
 'Maldives': 'MV',
 'Mali': 'ML',
 'Malta': 'MT',
 'Marshall Islands': 'MH',
 'Martinique': 'MQ',
 'Mauritania': 'MR',
 'Mauritius': 'MU',
 'Mayotte': 'YT',
 'Mexico': 'MX',
 'Micronesia, Federated States of': 'FM',
 'Moldova, Republic of': 'MD',
 'Monaco': 'MC',
 'Mongolia': 'MN',
 'Montenegro': 'ME',
 'Montserrat': 'MS',
 'Morocco': 'MA',
 'Mozambique': 'MZ',
 'Myanmar': 'MM',
 'Namibia': 'NA',
 'Nauru': 'NR',
 'Nepal': 'NP',
 'Netherlands': 'NL',
 'New Caledonia': 'NC',
 'New Zealand': 'NZ',
 'Nicaragua': 'NI',
 'Niger': 'NE',
 'Nigeria': 'NG',
 'Niue': 'NU',
 'Norfolk Island': 'NF',
 'Northern Mariana Islands': 'MP',
 'Norway': 'NO',
 'Oman': 'OM',
 'Pakistan': 'PK',
 'Palau': 'PW',
 'Palestine, State of': 'PS',
 'Panama': 'PA',
 'Papua New Guinea': 'PG',
 'Paraguay': 'PY',
 'Peru': 'PE',
 'Philippines': 'PH',
 'Pitcairn': 'PN',
 'Poland': 'PL',
 'Portugal': 'PT',
 'Puerto Rico': 'PR',
 'Qatar': 'QA',
 'Romania': 'RO',
 'Russian Federation': 'RU',
 'Rwanda': 'RW',
 'Réunion': 'RE',
 'Saint Barthélemy': 'BL',
 'Saint Helena, Ascension and Tristan da Cunha': 'SH',
 'Saint Kitts and Nevis': 'KN',
 'Saint Lucia': 'LC',
 'Saint Martin (French part)': 'MF',
 'Saint Pierre and Miquelon': 'PM',
 'Saint Vincent and the Grenadines': 'VC',
 'Samoa': 'WS',
 'San Marino': 'SM',
 'Sao Tome and Principe': 'ST',
 'Saudi Arabia': 'SA',
 'Senegal': 'SN',
 'Serbia': 'RS',
 'Seychelles': 'SC',
 'Sierra Leone': 'SL',
 'Singapore': 'SG',
 'Sint Maarten (Dutch part)': 'SX',
 'Slovakia': 'SK',
 'Slovenia': 'SI',
 'Solomon Islands': 'SB',
 'Somalia': 'SO',
 'South Africa': 'ZA',
 'South Georgia and the South Sandwich Islands': 'GS',
 'South Sudan': 'SS',
 'Spain': 'ES',
 'Sri Lanka': 'LK',
 'Sudan': 'SD',
 'Suriname': 'SR',
 'Svalbard and Jan Mayen': 'SJ',
 'Swaziland': 'SZ',
 'Sweden': 'SE',
 'Switzerland': 'CH',
 'Syrian Arab Republic': 'SY',
 'Scotland' : 'SY',
 'Taiwan, Province of China': 'TW',
 'Tajikistan': 'TJ',
 'Tanzania, United Republic of': 'TZ',
 'Thailand': 'TH',
 'Timor-Leste': 'TL',
 'Togo': 'TG',
 'Tokelau': 'TK',
 'Tonga': 'TO',
 'Trinidad and Tobago': 'TT',
 'Tunisia': 'TN',
 'Turkey': 'TR',
 'Turkmenistan': 'TM',
 'Turks and Caicos Islands': 'TC',
 'Tuvalu': 'TV',
 'Uganda': 'UG',
 'Ukraine': 'UA',
 'United Arab Emirates': 'AE',
 'England': 'GB',
 'USA': 'US',
 'United States Minor Outlying Islands': 'UM',
 'Uruguay': 'UY',
 'Uzbekistan': 'UZ',
 'Vanuatu': 'VU',
 'Venezuela, Bolivarian Republic of': 'VE',
 'Viet Nam': 'VN',
 'Virgin Islands, British': 'VG',
 'Virgin Islands, U.S.': 'VI',
 'Wallis and Futuna': 'WF',
 'Western Sahara': 'EH',
 'Yemen': 'YE',
 'Zambia': 'ZM',
 'Zimbabwe': 'ZW',
 'Åland Islands': 'AX'}

//  const myObj = JSON.parse(country);
console.log(country.Afghanistan )

const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const HotMatches = (props) => {

    const [selectedTab, setselectedTab] = useState('1')
    const [isData, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const items = props?.route?.params?.item;
    console.log("itemsss", items)

    const getLeagues = () => {
        setLoading(true)
        console.log(Colors.baseURL + '/leagues/v2/list?Category=' + items)
        fetch(Colors.baseURL + '/leagues/v2/list?Category=' + items, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'livescore6.p.rapidapi.com',
                'x-rapidapi-key': '37f361a9f1msh0f867dbf2bcb62bp19ba82jsnc5b46c71f72f'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.Ccg[0].Cnm)
                setselectedTab(data.Ccg)
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                Snackbar.show({
                    text: err,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: Colors.yellowColor
                });
                setLoading(false)
            })
        // .catch((error) => Alert.alert("Error In API!"))
    }

    useEffect(() => {
        getLeagues()
    }, [])

    console.log(country.Afghanistan )

    // console.log(selectedTab[0])


    return (
        <View style={styles.container}>
            <Header midtitle title={items + " league"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            {/* <View style={[styles.boxWithShadow, {
                flexDirection: "row", paddingHorizontal: wp(14), justifyContent: "space-between", alignItems: "center",
                backgroundColor: "#fff", paddingTop: wp(2.5)
            }]}>
                <Pressable onPress={() => setselectedTab('1')}
                    style={{
                        borderBottomWidth: selectedTab === '1' ? 3 : 0, borderBottomColor: Colors.red, paddingBottom: wp(1.5),
                        width: wp(18), alignItems: "center"
                    }}>
                    {selectedTab === '1' ?
                        <ResponsiveText size={"h16"} color={Colors.red} fontFamily={fonts.Montserrat_Bold}>{"PREVIEW"}</ResponsiveText>
                        :
                        <ResponsiveText size={"h16"} >{"PREVIEW"}</ResponsiveText>

                    }
                </Pressable>
                <Pressable onPress={() => setselectedTab('2')}
                    style={{
                        borderBottomWidth: selectedTab === '2' ? 3 : 0, borderBottomColor: Colors.red, paddingBottom: wp(1.5),
                        width: wp(18), alignItems: "center"
                    }}>
                    {selectedTab === '2' ?
                        <ResponsiveText size={"h16"} color={Colors.red} fontFamily={fonts.Montserrat_Bold}>{"ODDS"}</ResponsiveText>
                        :
                        <ResponsiveText size={"h16"}>{"ODDS"}</ResponsiveText>
                    }

                </Pressable>
                <Pressable onPress={() => setselectedTab('3')}
                    style={{
                        borderBottomWidth: selectedTab === '3' ? 3 : 0, borderBottomColor: Colors.red, paddingBottom: wp(1.5),
                        width: wp(18), alignItems: "center"
                    }}>
                    {selectedTab === '3' ?
                        <ResponsiveText size={"h16"} color={Colors.red} fontFamily={fonts.Montserrat_Bold}>{"STATS"}</ResponsiveText>
                        :
                        <ResponsiveText size={"h16"} >{"STATS"}</ResponsiveText>
                    }

                </Pressable>

            </View> */}

            {/* <View style={[styles.boxWithShadow, { backgroundColor: Colors.white, marginTop: wp(5), marginHorizontal: wp(3), paddingVertical: wp(2), paddingHorizontal: wp(5), borderRadius: 8 }]}>
                <ResponsiveText size={"h7"} >{"Friday 6am on FOX"}</ResponsiveText>
                <ResponsiveText size={"h7"} >{"Stadium Name\nAddress"}</ResponsiveText>
            </View> */}

            {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(5) }}>
                <HomeHeadings textTitle={"CONSENSUS ODDS"}
                    marginLeft={wp(-5)}
                    marginTop={wp(.1)} />
                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
            </View> */}
            {isLoading ? <ActivityIndicator size={"small"} color={Colors.red} />
                :
                <FlatList
                    data={selectedTab}
                    keyExtractor={(item) => item?.Cid}
                    ListEmptyComponent={() => {
                        return (
                          <Text style={{ alignSelf: 'center', marginTop: 100 }}>No Record Found</Text>
                        )
                      }}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Leagues", {item:item, name:items})}
                            style={[styles.boxWithShadow, {
                                backgroundColor: "#fff", borderRadius: 8,
                                alignItems: "center", marginHorizontal: wp(3), marginTop: wp(4),
                                paddingVertical: wp(2), paddingHorizontal: wp(3)
                            }]}>

                            <View style={{
                                flexDirection: "row", justifyContent: "space-between",
                                alignItems: 'center', width: "90%"
                            }}>

                                <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat} color={"#000000"}>
                                    {item?.Cnm}</ResponsiveText>
                                    {/* <CountryFlag isoCode={country?.item?.Cnm} size={20} /> */}
                                    {/* <CountryFlag 
                                    isoCode={typeof country?.[0] === 'string' ? country[0].toLowerCase() : ''} 
                                    size={20} /> */}
                                    
                                    {/* <CountryFlag isoCode={country[0].item?.Cnm} size={20} /> */}
                                    
                                    <Image
                                        source={item?.Ccd ? { uri: 'https://static.livescore.com/i2/fh/' + item?.Ccd + '.jpg'  } : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/2560px-Flag_of_Cyprus.svg.png'}
                                        style={{ height: 20, width: 30 }} resizeMode={"cover"} />
                                        
                            </View>

                        </TouchableOpacity>
                    )} />
            }
            {/* <CountryFlag isoCode={country[0]?.Afghanistan} size={20} /> */}
{/* 
            <EventCard
                    LeftTeam={"Imam"}
                    RightTeam={"Imam"}
                    LeagueName={"text"}
                    LeftImage={iconPath.TeamImage}
                    Rightimg={iconPath.TeamImage}
                    /> */}



            {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(5) }}>
                <HomeHeadings textTitle={"CONSENSUS PICKS"}
                    marginLeft={wp(-5)}
                    marginTop={wp(.1)} />
                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
            </View> */}



        </View>
    )
}
export default HotMatches;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    picksoftheDayInner: { flexDirection: "row", alignItems: "center", paddingLeft: wp(1) },
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6) }
})