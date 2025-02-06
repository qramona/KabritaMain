"use strict";
const onBtn1 = document.getElementById('offline-on');
const offBtn1 = document.getElementById('offline-off');
const onBtn2 = document.getElementById('online-on');
const offBtn2 = document.getElementById('online-off');
const offlineBlocks = document.getElementById('blocks__offline-to-buy');
const onlineBlocks = document.getElementById('blocks__online-to-buy');
// normal code started
let blockToBuy = document.querySelectorAll(".block-to-buy");
// summarize the id by the class
let offlineButtons = document.querySelectorAll(".button-off");
let onlineButtons = document.querySelectorAll(".button-on");


offBtn1.onclick = function foo(){
    offBtn1.style.display = 'none';
    onBtn1.style.display = 'flex';
    offlineBlocks.style.display = 'flex';
}
onBtn1.onclick = function (){
    offBtn1.style.display = 'flex';
    onBtn1.style.display = 'none';
    offlineBlocks.style.display = 'none';
}
//
offBtn2.onclick = function foo(){
    offBtn2.style.display = 'none';
    onBtn2.style.display = 'flex';
    onlineBlocks.style.display = 'flex';
}
onBtn2.onclick = function (){
    offBtn2.style.display = 'flex';
    onBtn2.style.display = 'none';
    onlineBlocks.style.display = 'none';
}

