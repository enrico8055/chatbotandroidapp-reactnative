import React from 'react';
import {Text, View, ScrollView} from 'react-native'; 
import NavDrawer from './Drawer'

export default Main = ({navigation}) =>{
  return (
    <ScrollView>
        {/* navbar */}
        <NavDrawer/> 

        {/* isi */}
        <View  style={{alignItems: 'center'}}>
          <Text style={{fontWeight:'bold', fontSize:30, marginBottom:20, marginTop: 20}}>ABOUT</Text>
          <Text style={{paddingHorizontal:30, textAlign:"justify"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non tortor libero. Maecenas in purus convallis, rhoncus libero ut, bibendum risus. Integer aliquet justo ac nunc hendrerit, finibus congue erat ultrices. Aenean non ornare odio, ac viverra lacus. Morbi sodales tellus id dolor euismod, tincidunt finibus sapien accumsan. Curabitur facilisis varius sapien eu vestibulum. Curabitur elementum, neque vulputate faucibus finibus, enim odio posuere mi, vitae aliquet est ex et nibh. Pellentesque a risus nec justo pulvinar tristique vel quis tortor. Maecenas suscipit justo lacus, non varius ex congue id. Morbi id massa vel tortor condimentum congue non id sapien. Nunc in dui nec urna tincidunt laoreet finibus at est. Pellentesque vitae scelerisque nulla, a blandit lectus. Quisque interdum mauris id sem lobortis, ut varius est laoreet. 
            
            </Text>

            <Text style={{paddingHorizontal:30, textAlign:"justify"}}>
            Aenean dictum enim leo, ac pretium quam vulputate eu. Phasellus accumsan lectus sapien, quis auctor leo blandit porttitor. Ut id mi ut velit euismod ultrices et ac est. Nunc volutpat, orci molestie pulvinar pellentesque, ipsum elit bibendum nunc, vel ornare lacus lacus sed magna. Aliquam erat volutpat. Quisque et enim arcu. Quisque non ligula fermentum, dignissim ex id, molestie tellus. Nunc bibendum a nisl pulvinar faucibus. Phasellus non ante porta, dapibus purus a, vulputate nisl. 
            
            </Text>

            <Text style={{paddingHorizontal:30, textAlign:"justify"}}>
            Cras sem risus, dapibus eu lobortis ac, bibendum vel massa. Donec at ultricies orci. Mauris quis consectetur nisi. Vestibulum lobortis cursus finibus. Pellentesque sagittis nibh libero. Aenean enim ligula, viverra nec erat vitae, efficitur posuere augue. Phasellus maximus, tortor sit amet tempor euismod, nibh nunc maximus arcu, ac auctor magna tortor sollicitudin ante. Nulla viverra turpis quam, vitae accumsan quam dictum at.

            </Text>

            <Text style={{paddingHorizontal:30, textAlign:"justify"}}>
            Nullam tempus, arcu a sollicitudin dignissim, turpis enim rutrum mi, vel ullamcorper elit sem nec augue. Aliquam eu aliquam leo. Fusce egestas lorem dolor, eu ullamcorper lacus consequat ac. Nulla lacus lorem, tempus et dictum fringilla, finibus et tellus. Praesent mollis malesuada pulvinar. Pellentesque metus velit, condimentum quis erat ornare, finibus sagittis tellus. Suspendisse potenti. Mauris imperdiet nunc lectus, elementum malesuada neque mattis at. Aenean ut dapibus tellus, in vulputate arcu. Aliquam mattis, urna et consectetur iaculis, erat mauris faucibus metus, sit amet consequat nibh mauris ut diam. Nullam auctor sapien vel turpis sodales malesuada. Suspendisse in tellus at diam varius efficitur. Maecenas dignissim ornare tortor ac condimentum.
            
            </Text>

            <Text style={{paddingHorizontal:30, textAlign:"justify"}}>
            In elit enim, accumsan a enim eget, sagittis cursus dui. Morbi egestas quis nulla quis auctor. Nam a sapien sapien. Morbi sit amet malesuada nisl, sed aliquet dolor. Quisque molestie dolor quis ullamcorper tincidunt. Nam sit amet dolor sit amet dui placerat rhoncus vitae id turpis. Nam nec metus libero. Donec nec nisi nec mauris mollis tempus. Aliquam erat volutpat. Cras elementum, ante eu porta imperdiet, mauris lorem efficitur mauris, ac viverra neque sem nec dui.
          </Text>
        </View>
      </ScrollView>
  );
};
