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

       // var menuClick = document.getElementById('main-hamburger');
       // var parentElement = document.getElementById(id);
       // var listeningElement = parentElement.querySelector('.listening');
       // var receivedElement = parentElement.querySelector('.received');

       // listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        //console.log('Received Event: ' + id);

        // function menu(){alert('1');}


        // menuClick.addEventListener("click", menu);


    }



    
};

app.initialize();



jQuery(function(){ // JQuery function call to run code

    var menuCick = $('.main-hamburger');
    var menu_list = $('.menu-list');
    var slide_0_btn = $('.slide-0-btn');
    var slide_1_btn = $('.slide-1-btn');
    var slide_2_btn = $('.slide-2-btn');
    var slide_0 = $('.slide-0');
    var slide_1 = $('.slide-1');
    var slide_2 = $('.slide-2');
    var browserClick = $('.browserClick');
    var shareClick = $('.shareClick');

    menuCick.click(function() {
        menu_list.toggleClass('menu-active');    
    });
    

    slide_0_btn.click(function() {
        slide_0.addClass('slide-active').removeClass('slide-active-over');   
        slide_1.removeClass('slide-active').addClass('slide-active-over');   
        slide_2.removeClass('slide-active').addClass('slide-active-over');   
        menu_list.toggleClass('menu-active'); 

        slide_0_btn.addClass('btn-active'); 
        slide_1_btn.removeClass('btn-active'); 
        slide_2_btn.removeClass('btn-active'); 
    });

    slide_1_btn.click(function() {
        slide_1.addClass('slide-active').removeClass('slide-active-over');    
        slide_0.removeClass('slide-active').addClass('slide-active-over');   
        slide_2.removeClass('slide-active').addClass('slide-active-over');    
        menu_list.toggleClass('menu-active');    
        
        slide_0_btn.removeClass('btn-active'); 
        slide_1_btn.addClass('btn-active'); 
        slide_2_btn.removeClass('btn-active'); 
    });

    slide_2_btn.click(function() {
        slide_2.addClass('slide-active').removeClass('slide-active-over');   
        slide_0.removeClass('slide-active').addClass('slide-active-over');   
        slide_1.removeClass('slide-active').addClass('slide-active-over');    
        menu_list.toggleClass('menu-active');    
        
        slide_0_btn.removeClass('btn-active'); 
        slide_1_btn.removeClass('btn-active'); 
        slide_2_btn.addClass('btn-active'); 
    });


    browserClick.click(function() {
        cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
    });



 




shareClick.click(function() {
  window.plugins.socialsharing.share('Here is your PDF file', 'Your PDF', 'www/files/manual.pdf');
   // window.plugins.socialsharing.share('Here is your PDF file', 'Your PDF');

        // this is the complete list of currently supported params you can pass to the plugin (all optional)
// var options = {
//     message: 'share this', // not supported on some apps (Facebook, Instagram)
//     subject: 'the subject', // fi. for email
//     files: ['', ''], // an array of filenames either locally or remotely
//     url: 'https://www.website.com/foo/#bar?a=b',
//     chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
//   }
   
//   var onSuccess = function(result) {
//     alert("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
//     alert("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
//   }
   
//   var onError = function(msg) {
//     alert("Sharing failed with message: " + msg);
//   }
   
//   window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
  
  });


});(jQuery); 
