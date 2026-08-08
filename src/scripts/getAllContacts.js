import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Tüm kişiler listelenirken bir hata oluştu:', error.message);
  }
};

console.log(await getAllContacts());
