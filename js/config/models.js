import Realm from 'realm';

const Fave = {
   name: 'Fave',
   primaryKey: 'id',
   properties: {
       id: 'string',
       faved_on: 'date'
   }
};

export const getFaves = () => realm.objects('Faves'); 


export const createFave = (id) => {

realm.write(() => {
   //Create Fave
   let Fave = realm.create('Fave', {id: id , faved_on: new Date() });
 })
}

export const deleteFave = (id) => {
    realm.write(() => {
     //Delete Fave
     let Fave = realm.objects('Faves').filtered('id === $0', id);
     realm.delete(Fave)
    })
}


export default new Realm ({schema: [Fave]});