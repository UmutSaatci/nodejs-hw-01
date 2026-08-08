import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);

    await fs.writeFile(PATH_DB, data, 'utf-8');

    console.log('Veriler başarıyla dosyaya yazıldı.');
  } catch (error) {
    console.error(
      'Dosyaya yazma işlemi sırasında bir hata oluştu:',
      error.message,
    );
    throw error;
  }
};
