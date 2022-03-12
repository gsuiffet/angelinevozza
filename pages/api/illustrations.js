import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const dir = path.resolve("./public", "illustrations");
  const categories = fs.readdirSync(dir);
  const categoryWithFiles = categories.map((category) => {
    function getValue() {
      const subDir = path.resolve("./public", `illustrations/${category}`);
      const filenames = fs.readdirSync(subDir);
      return filenames.map((file) => {
        return {
          src: `/illustrations/${category}/${file}`,
          width: 1,
          height: 1
        }
      })
    }
    return {
      key: category,
      value: getValue(),
    }
  })
  res.statusCode = 200
  res.json(categoryWithFiles);
}
