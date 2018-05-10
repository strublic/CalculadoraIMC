/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
    }
};

var botao = document.getElementById("botao");
botao.onclick = function(event){
    var resultado = document.getElementById("resultado");
    //resultado.innerHTML = "Teste";
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    
    var msg = "";

    if (imc < 17)
    {
        msg = "Muito abaixo do peso";
    }
    else if(imc < 18.5){
        msg = "Abaixo do peso";
    }
    else if(imc < 25){
        msg = "Peso normal";
    }
    else if(imc < 30){
        msg = "Acima do peso";
    }
    else if(imc < 35){
        msg = "Obesidade I";
    }
    else if(imc < 40){
        msg = "Obesidade II";
    }else{
        msg = "Obesidade III";
    }

    resultado.innerHTML = msg;

    event.preventDefault();
}

app.initialize();