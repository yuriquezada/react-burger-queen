// import { useState, useEffect } from 'react';
import db from '../config/firebase'

let sfRef = db.collection('menu').doc('menuA');
sfRef.getCollections().then(collections => {
  collections.forEach(collection => {
    console.log('Found subcollection with id:', collection.id);
  });
});
