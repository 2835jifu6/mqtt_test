var json;
var data;
var mqtt = require('mqtt');
var Buffer = require('buffer').Buffer;
	var opt = {
		clientId: 'nodejs',
		username: 'student',     //帳號
		password: 'lora-exp'     //密碼
	};
	var client = mqtt.connect('mqtts://mqtt.hscc.csie.ncu.edu.tw:1883', opt);
	client.on('connect', function(){
		console.log('已連接');
		client.subscribe('application/1/device/008000000000f310/#');   //訂閱的主題
	});
	
	client.on('message', function(topic, msg){
		json = JSON.parse(msg);  //資料轉成JSON
		data = new Buffer(json.data, 'base64').toString();   //將Base64解碼
	});
	
	
	
	
	const express = require('express');   //express套件
	const app = express();
	app.listen(3000);     //port
	
	app.get('/', function(req, res){
		res.header('Access-Control-Allow-Origin','*');
		res.send("感光數值: "+data);
	});
	