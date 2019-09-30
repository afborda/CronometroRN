import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';


export default class Cronometro extends Component{
  constructor(props){
    super(props);
    this.state={n:0, start:'Iniciar'};
    this.timer = null;

    this.start = this.start.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  start(){
    let s = this.state;
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      s.start = "Iniciar"
    }else{
      this.timer = setInterval(() =>{
            let s = this.state;
            s.n += 0.1;
            this.setState(s)
      }, 100);

      s.start = "Parar"
    }
    this.setState(s);
  }

  zerar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let s = this.state;
    s.n = 0;
    s.start="Iniciar"
    this.setState(s);

  }
  render(){
    return(
      <View style={styles.body}>
        <Image source={require('./img/relogio.png')}/>
        <Text style={styles.timer} >{this.state.n.toFixed(1)}</Text>
        <View style={styles.botaoArea}>
            <TouchableOpacity style={[styles.botao , styles.iniciar]} onPress={this.start}> 
              <Text style={[styles.botaoText]}>{this.state.start}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.botao , styles.zerar]} onPress={this.zerar}> 
              <Text style={[styles.botaoText]}>Zerar</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    backgroundColor:'#7159c1',
    justifyContent:'center',
    alignItems:'center',
  },
  timer:{
    color:'#baa07a',
    fontSize:80,
    fontWeight:'bold',
    backgroundColor:'transparent',
    marginTop: -160
  },
  botaoArea:{
    flexDirection:'row',
    height:40,
    marginTop:80
  },
  botao:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    margin:5,
  },
  botaoText:{
    fontSize:17,
    fontWeight:'bold',
    color:'#fff',
    textTransform:'uppercase',

  },
  iniciar:{
    backgroundColor:"#228B22"
    
  },
  zerar:{
    backgroundColor:'#ff0000'
  }


})