
const Imap = require('imap');

export const fetchEmailCount = async (email, appPassword) => {
  return new Promise((resolve, reject) => {
    const imap = new Imap({
      user: email,
      password: appPassword,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
    });

    imap.once('ready', () => {
      imap.openBox('INBOX', true, (err, box) => {
        if (err) reject(err);
        resolve(box.messages.total);
        imap.end();
      });
    });

    imap.once('error', (err) => {
      reject(err);
    });

    imap.connect();
  });
};
