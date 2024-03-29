// ==UserScript==
// @name         Shikimori watch
// @namespace    http://tampermonkey.net/
// @version      0.3.1
// @description  try to take over the world!
// @author       Zver
// @match        https://shikimori.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=shikimori.one
// @grant        none
// ==/UserScript==

function main(){
    'use strict';

    if (location.href.includes("/animes/") && document.querySelector("h1") && document.getElementsByClassName("btnWatchWatch").length) {
        createButton();
        return;
    }

}

function createButton(){
    var url = location.href;
    var regex = /animes\/[a-z]?(\d+)/;
    var id = regex.exec(url)[1];

    var block = document.querySelector(".cc.block");
    var firstChild = block.firstChild;
    var btnWatch = document.createElement("div");
    var link = document.createElement("a");

    firstChild.style.marginBottom = "0";

    btnWatch.setAttribute('class', 'btnWatchWatch');
    btnWatch.style.textAlign = "center";
    btnWatch.style.margin = "0px 4px 0px 3px";

    link.setAttribute('href', 'https://kodikdb.com/find-player?shikimoriID=' + id);
    link.setAttribute('target', '_blank');
    link.style.display = "block";
    link.style.background = "#343434";
    link.style.color = "#fff";
    link.style.padding = "5px 10px";
    link.style.fontSize = "15px";
    link.style.fontWeight = "700";
    link.style.marginBottom = "8px";

    link.appendChild(document.createTextNode('Смотреть онлайн'));
    btnWatch.appendChild(link);
    block.insertBefore(btnWatch, firstChild.nextElementSibling);

    return;
}

function ready(fn) {
    document.addEventListener('page:load', fn);
    document.addEventListener('turbolinks:load', fn);
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") fn();
    else document.addEventListener('DOMContentLoaded', fn);
}

ready(main);
