import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];
    await writeContacts(emptyContacts);

    console.log(
      'Rehberdeki tüm kişiler başarıyla silindi (Rehber sıfırlandı).',
    );
  } catch (error) {
    console.error('Tüm kişiler silinirken bir hata oluştu:', error.message);
  }
};

removeAllContacts();
