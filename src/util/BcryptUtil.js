import bcrypt from 'bcrypt';

// hash(text) 
export const hash = text => bcrypt.hashSync(text, bcrypt.genSaltSync(12));

// compare(text,encrypted)
export const compare = (text, encrypted) => new Promise((resolve, reject) => {
  bcrypt.compare(text, encrypted, (err, result) => {
    if (err) {
      return reject(err);
    }
    return resolve(result);
  });
});

