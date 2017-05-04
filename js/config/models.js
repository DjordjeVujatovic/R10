import Realm from 'realm';

const Faves = {
  name: 'Faves',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

export const realm = new Realm({ schema: [Faves] });

//Get Faves
export const getFaves = () => {
  return realm.objects('Faves').map((fave)=> fave.id)
};
//Add Fave
export const updateFave = (faveId) => {
  realm.write(() => {
    realm.create('Faves', { id: faveId, faved_on: new Date() });
  });
};
//Delete Fave
export const deleteFave = (faveId) => {
  realm.write(() => {
    const faves = realm.objects('Faves');
    const fave = faves.filtered('id == $0', faveId);

    realm.delete(fave);
  });
};