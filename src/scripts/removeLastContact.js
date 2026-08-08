import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      const removedContact = contacts.pop();

      await writeContacts(contacts);
      console.log(
        `Başarıyla son kişi silindi. Silinen Kişi: ${removedContact.name || 'Bilinmeyen Kullanıcı'}`,
      );
    } else {
      console.log('Rehber zaten boş, silinecek eleman bulunamadı.');
    }
  } catch (error) {
    console.error('Son kişi silinirken bir hata oluştu:', error.message);
  }
};

removeLastContact();
