import Realm from 'realm';

const Faves = {
  name: 'Faves',
  primaryKey: 'id',
  properties: {
    id: 'string',
    faved_on: 'date'
  }
};

const realm = new Realm({ schema: [Faves] });


//Query Faves
export const queryFaves = () => {
  return realm.objects('Faves').map((fave)=> fave.id)
};
// Get Faves
export const getFaves = () => {
  realm.objects('Faves');
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