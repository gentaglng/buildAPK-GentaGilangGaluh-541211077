import React from 'react';
import {View, ScrollView, Dimensions, Text, Image, Linking, TouchableOpacity, TextInput} from 'react-native';

const {width, height} = Dimensions.get('screen');
const ig = () => {
  Linking.openURL('https://instagram.com/gentaglng/');
}

const coc = () => {
  Linking.openURL('https://link.clashofclans.com/id?action=OpenPlayerProfile&tag=QUP800Q2V');
}

const wa = () => {
  Linking.openURL('https://wa.me/qr/ZFYKOT2S5ICTB1');
}

const p1 = () => {
  Linking.openURL('https://play.google.com/store/apps/details?id=com.dcproject.seket');
}

const p2 = () => {
  Linking.openURL('https://genta.dcproject.my.id/');
}

const porto = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'white'}}>
      <View style={{backgroundColor:'blue', height:width*0.2, width:width*0.8, borderBottomRightRadius:40}}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex:1, fontWeight: 'bold', fontSize:25, color:'lightblue'}}>Portofolio Ku</Text>
      </View>
      <View style={{alignItems:'center', padding:20}}>
        <Image
          source={require('../assets/profil.jpeg')}
          style={{height:width*0.7, width:width*0.7, borderRadius:40}}
        />
      </View>
      <View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Genta G Galuh</Text>
        <Text style={{fontSize:15, textAlign:'center', paddingHorizontal:20}}>Saya adalah siswa kelas XII RPL SMK Telkom Purwokerto dan berminat menjadi mobile programming yang handal</Text>
      </View>
      <View style={{marginTop:20, backgroundColor:'lightblue', height:width*0.14, width:width*0.4, borderTopRightRadius:20, borderBottomRightRadius:20}}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex:1, fontWeight: 'bold', fontSize:20, color:'blue'}}>Kontak</Text>
      </View>
      <View style={{height:10}}>
      </View>
      <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={ig}>
      <View style={{flexDirection:'row', backgroundColor:'pink', width:width*0.4, height:width*0.1, alignItems:'center', justifyContent:'center', borderRadius:10}}>
        <View>
          <Image
            source={require('../assets/ig.png')}
            style={{height:width*0.07, width:width*0.07}}
          />
        </View>
          <Text style={{fontWeight:'bold',fontSize:12, textAlignVertical:'center', paddingLeft:10}}>instagram</Text>
        <View>
        </View>
      </View>
      <View style={{height:10}}>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={coc}>
      
      <View style={{flexDirection:'row', backgroundColor:'lightyellow', width:width*0.4, height:width*0.1, alignItems:'center', justifyContent:'center', borderRadius:10}}>
        <View>
          <Image
            source={require('../assets/coc.png')}
            style={{height:width*0.07, width:width*0.07}}
          />
        </View>
          <Text style={{fontWeight:'bold',fontSize:12, textAlignVertical:'center', paddingLeft:10}}>clash of clans</Text>
        <View>
        </View>
      </View>
      <View style={{height:10}}>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={wa}>
      <View style={{flexDirection:'row', backgroundColor:'lightgreen', width:width*0.4, height:width*0.1, alignItems:'center', justifyContent:'center', borderRadius:10}}>
        <View>
          <Image
            source={require('../assets/wa.png')}
            style={{height:width*0.07, width:width*0.07}}
          />
        </View>
          <Text style={{fontWeight:'bold',fontSize:12, textAlignVertical:'center', paddingLeft:10}}>whatsapp</Text>
        
      </View>
      </TouchableOpacity>

      </View>
      
      <View style={{height:20}}>
      </View>



      <View style={{backgroundColor:'lightblue', height:width*0.14, width:width*0.4, borderTopRightRadius:20, borderBottomRightRadius:20}}>
        <Text style={{textAlign:'center', textAlignVertical:'center', flex:1, fontWeight: 'bold', fontSize:20, color:'blue'}}>Projek Ku</Text>
      </View>
      
      <TouchableOpacity onPress={p1}>
      <View style={{backgroundColor:'grey', height:width*0.4, width:width*0.8, alignSelf: 'center', marginTop:10, borderRadius:20}}>
      <Image
          source={require('../assets/projek1.jpeg')}
          style={{height:width*0.38, width:width*0.785, borderRadius:10}}
        />
      </View>
      </TouchableOpacity>
      <Text style={{alignSelf:'center', fontSize:10}}>klik gambar untuk melihat</Text>
      <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Aplikasi</Text>
      <Text style={{alignSelf:'center', fontSize:12}}>Secondhand Marketplace Apk</Text>

      <TouchableOpacity onPress={p2}>
      <View style={{backgroundColor:'grey', height:width*0.4, width:width*0.8, alignSelf: 'center', marginTop:10, borderRadius:20}}>
        <Image
          source={require('../assets/projek2.png')}
          style={{height:width*0.38, width:width*0.785, borderRadius:10}}
        />
      </View>
      </TouchableOpacity>
      <Text style={{alignSelf:'center', fontSize:10}}>klik gambar untuk melihat</Text>
      <Text style={{alignSelf:'center', fontSize:12, fontWeight:'bold'}}>Website</Text>
      <Text style={{alignSelf:'center', fontSize:12}}>Secondhand Marketplace Web</Text>

      <View style={{height:20}}>
      </View>

      <View style={{alignItems:'center'}}>
      <TextInput
      
      placeholder='Kritik dan Saran'
      
      style={{textAlign:'center',borderColor:'black', height:width*0.15,width:width*0.8,borderRadius:10, borderWidth:1}}
      />
      </View>

    </View>
    <View style={{height:20}}>
    </View>
    </ScrollView>
  )
}

export default porto;