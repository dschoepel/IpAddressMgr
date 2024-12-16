const express = require('express');
const Unifi = require('node-unifi');
const unifi = new Unifi.Controller({host: '192.168.10.233', port: '8443',  sslverify: false });

(async () => {
    try {
      // LOGIN
      const loginData = await unifi.login('dschoepel', 'Buddy1103@home');
      console.log('login: ' + loginData);
  
      // GET SITE STATS
    //   const sites = await unifi.getSitesStats();
    //   console.log('getSitesStats: ' + sites[0].name + ':' + sites.length);
    //   console.log(JSON.stringify(sites));
  
      // GET SITE SYSINFO
    //   const sysinfo = await unifi.getSiteSysinfo();
    //   console.log('getSiteSysinfo: ' + sysinfo.length);
    //   console.log(JSON.stringify(sysinfo));
  
      // GET CLIENT DEVICES
      const clientData = await unifi.getClientDevices();
      console.log('getClientDevices: ' + clientData.length);
      console.log(JSON.stringify(clientData[4]));
  
      // GET ALL USERS EVER CONNECTED
    //   const usersData = await unifi.getAllUsers();
    //   console.log('getAllUsers: ' + usersData.length);
    //   console.log(JSON.stringify(usersData));
  
        // LOGOUT
        console.log('LOGOUT:')
      const logoutData = await unifi.logout();
      console.log('logout: ' + JSON.stringify(logoutData));
    } catch (error) {
      console.log('ERROR: ' + error);
    }
  })();