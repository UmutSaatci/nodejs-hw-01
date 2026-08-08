import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data);

    if (!Array.isArray(parsedData)) {
      return [];
    }

    return parsedData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn('Dosya henüz mevcut değil, boş bir dizi döndürülüyor.');
      return [];
    }

    console.error('Veritabanı okurken hata oluştu:', error.message);
    throw error;
  }
};
