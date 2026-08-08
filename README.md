src/constants/contacts.js dosyasında PATH_DB adında bir sabit tanımlanmıştır. Bunu src/db/db.json dosyasının yolunu saklayacak şekilde başlatın.

package.json dosyasında, belirli dosyaların kodunu çalıştıran betikler zaten tanımlanmıştır:

npm run get-all - src/scripts/getAllContacts.js dosyasındaki kodu çalıştırır.

npm run generate - src/scripts/generateContacts.js dosyasındaki kodu çalıştırır.

npm run add-one - src/scripts/addOneContact.js dosyasındaki kodu çalıştırır.

npm run count - src/scripts/countContacts.js dosyasındaki kodu çalıştırır.

npm run remove-last - src/scripts/removeLastContact.js dosyasındaki kodu çalıştırır.

npm run remove-all - src/scripts/removeAllContacts.js dosyasındaki kodu çalıştırır.

src/utils/createFakeContact.js dosyasında, rastgele verilerle bir iletişim bilgisi oluşturan createFakeContact fonksiyonu tanımlanmıştır. Gerçekçi rastgele veriler, isimler, telefon numaraları, e-postalar vb. oluşturmak için @faker-js/faker kütüphanesi kullanılmaktadır. Bunu projenize şu komutla kurun:



npm i -D @faker-js/faker
