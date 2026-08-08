import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = createFakeContact();

    const updatedContacts = [...contacts, newContacts];
    await writeContacts(updatedContacts);
  } catch (error) {
    console.error('Yeni kişi eklenirken bir hata oluştu:', error.message);
  }
};

addOneContact();
