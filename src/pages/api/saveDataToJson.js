import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

const saveDataToJson = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const data = JSON.parse(req.body);

  fs.writeFile(dataFilePath, JSON.stringify(data), 'utf8', (err) => {
    if (err) {
      console.error('Error al guardar los datos en el archivo JSON:', err);
      return res.status(500).end('Internal Server Error');
    }

    return res.status(200).end('Datos guardados en el archivo JSON');
  });
};

export default saveDataToJson;