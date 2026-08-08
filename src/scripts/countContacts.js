import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    const totalCount = contacts.length;
    console.log(`Rehberdeki toplam kişi sayısı: ${totalCount}`);

    return totalCount;
  } catch (error) {
    console.error('Kişi sayısı hesaplanırken bir hata oluştu:', error.message);
    return 0;
  }
};

console.log(await countContacts());
