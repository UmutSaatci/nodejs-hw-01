import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);

    console.log(
      `Başarıyla ${number} yeni kişi üretildi ve mevcut listeye eklendi.`,
    );
  } catch (error) {
    console.error(
      'Kişiler üretilirken ve dosyaya yazılırken bir hata oluştu:',
      error.message,
    );
  }
};

generateContacts(5);
